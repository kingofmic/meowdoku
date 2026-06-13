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
  if (!res.ok) throw new Error(`${method} ${url} failed ${res.status}: ${text.slice(0, 1200)}`);
  return text ? JSON.parse(text) : {};
}

const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
const required = ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_PROJECT_NAME"];
const missing = required.filter((key) => !env[key]);
if (missing.length) throw new Error(`Missing keys: ${missing.join(", ")}`);

const base = `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}`;
const project = await cloudflare("GET", `${base}/pages/projects/${env.CLOUDFLARE_PROJECT_NAME}`, env.CLOUDFLARE_API_TOKEN);
console.log(`Project: ${project.result?.name}`);
console.log(`Subdomain: ${project.result?.subdomain || "unknown"}`);
console.log(`Production branch: ${project.result?.production_branch || "unknown"}`);

const deployments = await cloudflare("GET", `${base}/pages/projects/${env.CLOUDFLARE_PROJECT_NAME}/deployments`, env.CLOUDFLARE_API_TOKEN);
const latest = deployments.result?.[0];
if (latest) {
  console.log(`Latest deployment: ${latest.id}`);
  console.log(`Latest URL: ${latest.url || "unknown"}`);
  console.log(`Latest stage: ${latest.latest_stage?.name || "unknown"} / ${latest.latest_stage?.status || "unknown"}`);
}

const domains = await cloudflare("GET", `${base}/pages/projects/${env.CLOUDFLARE_PROJECT_NAME}/domains`, env.CLOUDFLARE_API_TOKEN);
const list = domains.result || [];
console.log(`Custom domains: ${list.length}`);
for (const domain of list) {
  console.log(`- ${domain.name}: ${domain.status || "unknown"}`);
}
