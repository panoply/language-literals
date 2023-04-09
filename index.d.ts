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
declare const html: (strings: TemplateStringsArray, ...values: Array<string>) => string;
/**
 * Liquid Template Literal
 *
 * @example
 *
* liquid`
*
*  {% for i in arr %}
*    <strong class="pink">Hello World</strong>
*  {% endfor %}
*
* `
*/
declare const liquid: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const xhtml: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const xml: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const css: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const scss: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const sass: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const json: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const jsonc: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const js: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const jsx: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const ts: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const tsx: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const yaml: (strings: TemplateStringsArray, ...values: Array<string>) => string;
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
declare const md: (strings: TemplateStringsArray, ...values: Array<string>) => string;

export { css, html, js, json, jsonc, jsx, liquid, md, sass, scss, ts, tsx, xhtml, xml, yaml };
