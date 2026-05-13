const fs = require("node:fs");
const path = require("node:path");
const MarkdownIt = require("markdown-it");
const katex = require("katex");

const root = __dirname;
const sourcePath = path.join(root, "paper.md");
const outDir = path.join(root, "site");
const vendorDir = path.join(outDir, "vendor", "katex");
const outPath = path.join(outDir, "index.html");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFileIfExists(from, to) {
  if (!fs.existsSync(from)) return false;
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
  return true;
}

function copyDir(from, to) {
  ensureDir(to);
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const source = path.join(from, entry.name);
    const target = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(source, target);
    } else if (entry.isFile()) {
      fs.copyFileSync(source, target);
    }
  }
}

function renderMath(tex, displayMode) {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: "warn",
    output: "html",
  });
}

function mathPlugin(md) {
  md.inline.ruler.before("escape", "math_inline", (state, silent) => {
    if (state.src[state.pos] !== "$" || state.src[state.pos + 1] === "$") return false;

    let pos = state.pos + 1;
    while ((pos = state.src.indexOf("$", pos)) !== -1) {
      if (state.src[pos - 1] !== "\\") break;
      pos += 1;
    }
    if (pos === -1) return false;

    const content = state.src.slice(state.pos + 1, pos);
    if (!content.trim()) return false;

    if (!silent) {
      const token = state.push("math_inline", "math", 0);
      token.content = content;
    }
    state.pos = pos + 1;
    return true;
  });

  md.block.ruler.before("fence", "math_block", (state, startLine, endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    const marker = state.src.slice(start, max).trim();
    if (marker !== "$$") return false;

    let nextLine = startLine + 1;
    const content = [];
    for (; nextLine < endLine; nextLine += 1) {
      const lineStart = state.bMarks[nextLine] + state.tShift[nextLine];
      const lineEnd = state.eMarks[nextLine];
      const line = state.src.slice(lineStart, lineEnd);
      if (line.trim() === "$$") break;
      content.push(line);
    }
    if (nextLine >= endLine) return false;

    if (!silent) {
      const token = state.push("math_block", "math", 0);
      token.block = true;
      token.content = content.join("\n");
      token.map = [startLine, nextLine + 1];
    }
    state.line = nextLine + 1;
    return true;
  });

  md.renderer.rules.math_inline = (tokens, idx) => renderMath(tokens[idx].content, false);
  md.renderer.rules.math_block = (tokens, idx) => `${renderMath(tokens[idx].content, true)}\n`;
}

const source = fs.readFileSync(sourcePath, "utf8");
const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
}).use(mathPlugin);

ensureDir(outDir);

const katexRoot = path.dirname(require.resolve("katex/package.json"));
copyFileIfExists(path.join(katexRoot, "dist", "katex.min.css"), path.join(vendorDir, "katex.min.css"));
copyDir(path.join(katexRoot, "dist", "fonts"), path.join(vendorDir, "fonts"));

const imageRefs = [...source.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
for (const ref of imageRefs) {
  if (/^[a-z]+:/i.test(ref) || ref.startsWith("#")) continue;
  const cleanRef = ref.split(/[?#]/, 1)[0];
  copyFileIfExists(path.join(root, cleanRef), path.join(outDir, cleanRef));
}

const body = md.render(source);
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Analytic Signal Representation of Modulated Waveforms</title>
  <link rel="stylesheet" href="vendor/katex/katex.min.css">
  <style>
    :root {
      color-scheme: light;
      --bg: #f7f5ef;
      --paper: #fffdf8;
      --ink: #25231f;
      --muted: #666157;
      --rule: #d8d0c3;
      --accent: #2b6256;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 18px;
      line-height: 1.65;
    }

    main {
      width: min(100% - 32px, 880px);
      margin: 32px auto;
      padding: clamp(24px, 5vw, 64px);
      background: var(--paper);
      border: 1px solid var(--rule);
      box-shadow: 0 18px 50px rgb(31 27 18 / 10%);
    }

    h1,
    h2 {
      line-height: 1.15;
      margin: 1.8em 0 0.65em;
    }

    h1:first-child {
      margin-top: 0;
      font-size: clamp(2rem, 5vw, 3.75rem);
    }

    h2 {
      color: var(--accent);
      font-size: clamp(1.3rem, 3vw, 1.8rem);
    }

    p,
    ol,
    blockquote {
      margin: 0 0 1.1em;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 4px solid var(--rule);
      color: var(--muted);
    }

    hr {
      border: 0;
      border-top: 1px solid var(--rule);
      margin: 2rem 0;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1.5rem auto;
      border: 1px solid var(--rule);
      background: #fff;
    }

    .katex-display {
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0.25rem 0;
    }

    @media print {
      body {
        background: #fff;
      }

      main {
        width: 100%;
        margin: 0;
        border: 0;
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <main>
${body}
  </main>
</body>
</html>
`;

fs.writeFileSync(outPath, html);
console.log(`Rendered ${path.relative(root, outPath)}`);
