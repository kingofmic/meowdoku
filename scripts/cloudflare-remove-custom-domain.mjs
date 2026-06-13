import { promises as fs } from "node:fs";
import path from "node:path";

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

async function cloudflare(method, url, token) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}` }
  });
  const text = await res.text();
  if (res.status === 404) return { notFound: true };
  if (!res.ok) throw new Error(`${method} ${url} failed ${res.status}: ${text.slice(0, 1200)}`);
  return text ? JSON.parse(text) : {};
}

const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
const required = ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_PROJECT_NAME"];
const missing = required.filter((key) => !env[key]);
if (missing.length) throw new Error(`Missing keys: ${missing.join(", ")}`);

const domain = process.argv[2] || "meowdoku.xyz";
const base = `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}`;
const result = await cloudflare(
  "DELETE",
  `${base}/pages/projects/${env.CLOUDFLARE_PROJECT_NAME}/domains/${encodeURIComponent(domain)}`,
  env.CLOUDFLARE_API_TOKEN
);

if (result.notFound) {
  console.log(`Custom domain was not present: ${domain}`);
} else {
  console.log(`Removed Pages custom domain request: ${domain}`);
}
