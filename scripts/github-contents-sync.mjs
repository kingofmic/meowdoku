import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const excludedDirs = new Set([".git", ".github", ".secrets", "node_modules", "out", ".wrangler"]);
const excludedFiles = new Set([".local-server.pid", ".local-server.log", ".local-server.err.log"]);

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

async function github(method, url, token, body, ok404 = false) {
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
  if (ok404 && res.status === 404) return null;
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
const message = process.argv.includes("--message")
  ? process.argv[process.argv.indexOf("--message") + 1]
  : "Update latest project version";
const api = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}`;
const files = await walk(root);

console.log(`Syncing ${files.length} files to ${env.GITHUB_OWNER}/${env.GITHUB_REPO}@${branch}`);
let index = 0;
let lastCommit = "";
for (const rel of files) {
  index += 1;
  const encodedPath = rel.split("/").map(encodeURIComponent).join("/");
  const existing = await github("GET", `${api}/contents/${encodedPath}?ref=${branch}`, env.GITHUB_TOKEN, null, true);
  const buffer = await fs.readFile(path.join(root, rel));
  const result = await github("PUT", `${api}/contents/${encodedPath}`, env.GITHUB_TOKEN, {
    message: `${message}: ${rel}`,
    content: buffer.toString("base64"),
    branch,
    ...(existing?.sha ? { sha: existing.sha } : {})
  });
  lastCommit = result.commit?.sha || lastCommit;
  console.log(`Synced ${index}/${files.length}: ${rel}`);
}

console.log(`GitHub contents sync complete: ${lastCommit.slice(0, 12)}`);
