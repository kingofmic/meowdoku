import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const excludedDirs = new Set([".git", ".secrets", "node_modules", "out", ".wrangler"]);
const excludedFiles = new Set([]);

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

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const rel = path.relative(root, fullPath).replaceAll("\\", "/");
    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name)) continue;
      files.push(...(await walk(fullPath)));
      continue;
    }
    if (!entry.isFile()) continue;
    if (excludedFiles.has(entry.name) || entry.name.endsWith(".log")) continue;
    files.push(rel);
  }
  return files.sort((a, b) => a.localeCompare(b));
}

const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
const required = ["GITHUB_TOKEN", "GITHUB_OWNER", "GITHUB_REPO"];
const missing = required.filter((key) => !env[key]);
if (missing.length) throw new Error(`Missing keys: ${missing.join(", ")}`);

const branch = env.GITHUB_BRANCH || "main";
const api = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}`;
const refUrl = `${api}/git/ref/heads/${branch}`;

try {
  await github("GET", refUrl, env.GITHUB_TOKEN);
  console.log(`${branch} already exists; initial push skipped.`);
  process.exit(0);
} catch (error) {
  if (!String(error.message).includes("409") && !String(error.message).includes("404")) throw error;
}

console.log(`Creating initial ${branch} branch with seed .gitignore`);
const content = await fs.readFile(path.join(root, ".gitignore"), "utf8");
const created = await github("PUT", `${api}/contents/.gitignore`, env.GITHUB_TOKEN, {
  message: "Initialize Meowdoku repository",
  content: Buffer.from(content, "utf8").toString("base64"),
  branch
});

const sha = created.commit?.sha || "";
const digest = createHash("sha256").update(sha).digest("hex").slice(0, 12);
console.log(`Initial GitHub branch created: ${sha.slice(0, 12)}`);
console.log(`Verification digest: ${digest}`);
