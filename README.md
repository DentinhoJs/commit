# Ferramenta de Comiit Automatico

Script **Node.js** pra farmar commits no GitHub de forma automática. Ideal pra inflar seu gráfico de commits com estilo e consistência.  
Desenvolvido por **DentinhoJs**

---

## 🧠 Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- [Git](https://git-scm.com) instalado e configurado
- Conta no GitHub com repositório criado
- Conhecimento básico de terminal

---

## 📦 Instalação Passo a Passo

### 1. Clone ou crie seu repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências

```bash
npm init -y
```

> Esse projeto usa apenas módulos nativos: `fs` e `child_process`

## ⚙️ Configuração no Script

```js
const MAX_COMMITS = 1000; // Quantos commits você quer farmar
const REPO_PATH = "C:/Users/DentinhoJs/Desktop/commit"; // Caminho do repositório local
const COMMIT_DELAY_MS = 5000; // Delay entre commits em milissegundos (Recomendo deixa 5 segundos)
```

---

## ▶️ Como rodar

```bash
node BOT.js
```

---

## 🔁 O que o script faz

* Cria/abre o arquivo `commit.txt`
* Adiciona uma linha com timestamp
* Executa `git add .`
* Cria commits com frases do `mensagens.json`
* Dá push automático a cada 100 commits
* Dá push final no fim do processo

---

## 🧪 Exemplo de uso

```bash
🚀 Iniciando o Commit...

✅ Commit 1/1000 feito: Fazendo história #1
✅ Commit 2/1000 feito: Subindo degraus #2
...
🚀 Push automático após 100 commits
...
🔥 Todos os commits foram enviados com sucesso!
```

---

## ❌ Possíveis erros

* `Error: ENOENT` → Caminho pro repositório tá errado
* `git` não reconhecido → Git não instalado ou não configurado
* `permission denied` → Executa o terminal como administrador

---

## 📤 Dando push no GitHub (caso não esteja configurado)

```bash
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

## 📜 Licença

Livre pra usar, modificar e compartilhar. Só não vende, Jão!
