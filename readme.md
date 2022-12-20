# Language Literals

Dedent named exports for tagged template literals. This is a sugar helper utility that can be used with the vscode [Language Literals](https://marketplace.visualstudio.com/items?itemName=sissel.language-literals) extension to provide syntax highlighting and dedent capabilities of template literal strings.

### Install

```base
pnpm add language-literals
```

Because [pnpm](https://pnpm.js.org/en/cli/install) is dope and does dope shit.

### Usage

Use named import expressions, the syntax highlighting grammars will not work on `* as` import assignments.

<!-- prettier-ignore -->
```ts
import {
  html,
  xml,
  xhtml,
  json,
  jsonc,
  yaml,
  css,
  scss,
  sass,
  js,
  ts,
  jsx,
  tsx,
  md,
} from "language-literals";

html``;
xml``;
xhtml``;
json``;
jsonc``;
yaml``;
css``;
scss``;
sass``;
js``;
ts``;
jsx``;
tsx``;
md``;

```

### License

MIT
