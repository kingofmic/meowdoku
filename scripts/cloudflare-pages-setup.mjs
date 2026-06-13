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

async function cloudflare(method, url, token, body, ok404 = false) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  if (ok404 && res.status === 404) return null;
  if (!res.ok) throw new Error(`${method} ${url} failed ${res.status}: ${text.slice(0, 1200)}`);
  return text ? JSON.parse(text) : {};
}

const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
const required = ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_PROJECT_NAME"];
const missing = required.filter((key) => !env[key]);
if (missing.length) throw new Error(`Missing keys: ${missing.join(", ")}`);

const base = `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}`;
const projectName = env.CLOUDFLARE_PROJECT_NAME;
const branch = env.GITHUB_BRANCH || "main";
const existing = await cloudflare("GET", `${base}/pages/projects/${projectName}`, env.CLOUDFLARE_API_TOKEN, null, true);

if (existing?.result) {
  console.log(`Cloudflare Pages project exists: ${projectName}`);
  process.exit(0);
}

const created = await cloudflare("POST", `${base}/pages/projects`, env.CLOUDFLARE_API_TOKEN, {
  name: projectName,
  production_branch: branch
});

console.log(`Created Cloudflare Pages project: ${created.result?.name || projectName}`);
if (created.result?.subdomain) console.log(`Pages subdomain: ${created.result.subdomain}`);
