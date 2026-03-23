import { exec } from "node:child_process";
import process from "node:process";

const serverProcess = exec("npm run server", { stdio: "inherit" });
const devProcess = exec("npm run dev", { stdio: "inherit" });

let isShuttingDown = false;
function shutdown(exitCode = 0) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  for (const child of [serverProcess, devProcess]) {
    if (!child || child.killed) continue;
    try {
      child.kill("SIGINT");
    } catch {
      try {
        child.kill();
      } catch {
        // Ignore.
      }
    }
  }

  process.exit(exitCode);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

serverProcess.on("exit", (code) => shutdown(code ?? 0));
devProcess.on("exit", (code) => shutdown(code ?? 0));
