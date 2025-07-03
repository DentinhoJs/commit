const fs = require("fs");
const { execSync } = require("child_process");

const mensagens = require("./mensagens.json");

const MAX_COMMITS = 1000;
const REPO_PATH = "C:/Users/Italo/Desktop/commit";
const COMMIT_DELAY_MS = 2000;

function getRandomMsg() {
  return mensagens[Math.floor(Math.random() * mensagens.length)];
}

function makeDummyChange(file) {
  const now = new Date();
  fs.appendFileSync(file, `// ${now.toISOString()}\n`);
}

function run(cmd) {
  return execSync(cmd, { cwd: REPO_PATH });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log("🚀 Iniciando o Commit...\n");

  const dummyFile = `${REPO_PATH}/commit.txt`;
  if (!fs.existsSync(dummyFile)) fs.writeFileSync(dummyFile, "// Arquivo inicial\n");

  for (let i = 1; i <= MAX_COMMITS; i++) {
    try {
      makeDummyChange(dummyFile);
      run(`git add .`);
      const msg = `${getRandomMsg()} #${i}`;
      run(`git commit -m "${msg}"`);

      console.log(`✅ Commit ${i}/${MAX_COMMITS} feito: ${msg}`);

      if (i % 100 === 0) {
        run(`git push`);
        console.log(`🚀 Push automático após ${i} commits`);
      }

      await sleep(COMMIT_DELAY_MS);
    } catch (err) {
      console.error(`❌ Erro no commit ${i}:`, err.message || err);
    }
  }

  try {
    run(`git push`);
    console.log("\n🔥 Todos os commits foram enviados com sucesso!");
  } catch (err) {
    console.error("\n❌ Erro no push final:", err.message || err);
  }
})();


// Developer by DentinhoJs
