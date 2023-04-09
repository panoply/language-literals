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
  liquid,
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
liquid``;
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

### Example

Let's take the following expression, wherein the `html` literal is indented at a depth of 3 from the right side:

<!-- prettier-ignore-->
```js
import { html } from 'language-literals';

function example () {

  const object = {
    property: [

      /* WITHOUT LANGUAGE LITERAL */
      `

      <div>
        <h1>Hello World</h1>
      </div>

      `,

      /* WITH LANGUAGE LITERAL */
      html`

      <div>
        <h1>Hello World</h1>
      </div>

      `

    ]
  }
}
```

The output result would preserve the additional whitespace starting from the left side. Using the above sample:

**Without Language Literal**

<!--prettier-ignore-->
```

      <div>
        <h1>Hello World</h1>
      </div>

```

**Using Language Literal**

```
<div>
  <h1>Hello World</h1>
</div>
```

Notice how the code output when using the `html` literal trims the leading and ending spaces. Very cool.

### License

MIT
