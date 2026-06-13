import { spawn } from "node:child_process";
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

function run(command, env) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command}`);
    const child = spawn(command, {
      cwd: root,
      env: { ...process.env, ...env },
      shell: true,
      stdio: "inherit"
    });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`Command failed: ${command}`)));
  });
}

const env = loadEnv(await fs.readFile(path.join(root, ".secrets", "deployment.env"), "utf8"));
const required = ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_PROJECT_NAME"];
const missing = required.filter((key) => !env[key]);
if (missing.length) throw new Error(`Missing keys: ${missing.join(", ")}`);

await run("npm run pages:build", env);
await run(`npx wrangler pages deploy out --project-name=${env.CLOUDFLARE_PROJECT_NAME} --branch=${env.GITHUB_BRANCH || "main"} --commit-dirty=true`, env);
