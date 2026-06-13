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

async function cloudflare(method, url, token, body, ok409 = false) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  if (ok409 && res.status === 409) return { alreadyExists: true, text };
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
  "POST",
  `${base}/pages/projects/${env.CLOUDFLARE_PROJECT_NAME}/domains`,
  env.CLOUDFLARE_API_TOKEN,
  { name: domain },
  true
);

if (result.alreadyExists) {
  console.log(`Custom domain already exists or is pending: ${domain}`);
} else {
  console.log(`Custom domain requested: ${result.result?.name || domain}`);
  console.log(`Status: ${result.result?.status || "pending"}`);
}
