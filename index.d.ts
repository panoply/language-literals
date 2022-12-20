/**
 * Dedent Literals
 */
declare function literal(strings: TemplateStringsArray, ...values: Array<string>): string;
/**
 * HTML Template Literal
 *
 * @example
 *
 * html`
 *
 *  <div>
 *    Hello World
 *  </div>
 *
 * `
 */
declare const html: typeof literal;
/**
 * XHTML Template Literal
 *
 * @example
 *
 * xhtml`
 *
 *  <br />
 *
 * `
 */
declare const xhtml: typeof literal;
/**
 * XML Template Literal
 *
 * @example
 *
 * xml`
 *
 *  <?xml version="1.0" encoding="UTF-8" ?>
 *
 * `
 */
declare const xml: typeof literal;
/**
 * CSS Template Literal
 *
 * @example
 *
 * css`
 *
 *  .class {
 *    font-color: white;
 *  }
 *
 * `
 */
declare const css: typeof literal;
/**
 * SCSS Template Literal
 *
 * @example
 *
 * scss`
 *
 *  .class {
 *    font-color: white;
 *  }
 *
 * `
 */
declare const scss: typeof literal;
/**
 * SASS Template Literal
 *
 * @example
 *
 * sass`
 *
 *  .class
 *    font-color: white;
 *
 * `
 */
declare const sass: typeof literal;
/**
 * JSON Template Literal
 *
 * @example
 *
 * json`
 *
 *  {
 *    "prop": "value"
 *  }
 *
 * `
 */
declare const json: typeof literal;
/**
 * JSON Template Literal
 *
 * @example
 *
 * jsonc`
 *
 *  {
 *    "prop": "value" // some comment
 *  }
 *
 * `
 */
declare const jsonc: typeof literal;
/**
 * JavaScript Template Literal
 *
 * @example
 *
 * js`
 *
 *  function foo () { }
 *
 */
declare const js: typeof literal;
/**
 * JSX Template Literal
 *
 * @example
 *
 * jsx`
 *
 * function foo (prop) {
 *
 *   return <Component name={prop.name} />;
 *
 * }
 *
 * `
 */
declare const jsx: typeof literal;
/**
 * TypeScript Template Literal
 *
 * @example
 *
 * ts`
 *
 *  function foo () { }
 *
 * `
 */
declare const ts: typeof literal;
/**
 * TSX Template Literal
 *
 * @example
 *
 * tsx`
 *
 * function foo (prop: { name: string }) {
 *
 *   return <Component name={prop.name} />;
 *
 * }
 *
 * `
 */
declare const tsx: typeof literal;
/**
 * YAML Template Literal
 *
 * @example
 *
 * yaml`
 *
 * key: 'value'
 * arr:
 *   - one
 *   - two
 * `
 */
declare const yaml: typeof literal;
/**
 * Markdown Template Literal
 *
 * @example
 *
 * md`
 *
 * # Title
 *
 * **bold** _italic_
 *
 * `
 */
declare const md: typeof literal;

export { css, html, js, json, jsonc, jsx, md, sass, scss, ts, tsx, xhtml, xml, yaml };
