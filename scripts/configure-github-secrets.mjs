import { promises as fs } from "node:fs";
import path from "node:path";
import sodium from "libsodium-wrappers";

const root = process.cwd();

function loadEnv(text) {
  const env = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const index = line.indexOf("=");
    env[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return env;
}

async function github(method, url, token, body) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url} failed ${res.status}: ${text.slice(0, 800)}`);
  return text ? JSON.parse(text) : {};
}

await sodium.ready;

const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
const required = [
  "GITHUB_TOKEN",
  "GITHUB_OWNER",
  "GITHUB_REPO",
  "CLOUDFLARE_API_TOKEN",
  "CLOUDFLARE_ACCOUNT_ID",
  "CLOUDFLARE_PROJECT_NAME"
];
const missing = required.filter((key) => !env[key]);
if (missing.length) throw new Error(`Missing required keys: ${missing.join(", ")}`);

const base = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}`;
const publicKey = await github("GET", `${base}/actions/secrets/public-key`, env.GITHUB_TOKEN);
const secrets = ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_PROJECT_NAME"];

for (const name of secrets) {
  const encrypted = sodium.crypto_box_seal(env[name], sodium.from_base64(publicKey.key, sodium.base64_variants.ORIGINAL));
  await github("PUT", `${base}/actions/secrets/${name}`, env.GITHUB_TOKEN, {
    encrypted_value: sodium.to_base64(encrypted, sodium.base64_variants.ORIGINAL),
    key_id: publicKey.key_id
  });
  console.log(`Configured GitHub Actions secret: ${name}`);
}
