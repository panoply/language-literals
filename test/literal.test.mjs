import test from 'ava';
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
  md
} from 'language-literals';

const join = (...arr) => arr.join('\n');

test('HTML', t => {

  const dedent = html`
    <div>
      Hello World
    </div>
  `;

  t.deepEqual(dedent, join(
    '<div>',
    '  Hello World',
    '</div>'
  ));

});

test('LIQUID', t => {

  const dedent = liquid`
    {% for i in arr %}
      <strong>
        Hello World
      </strong>
    {% endfor %}
  `;

  t.deepEqual(dedent, join(
    '{% for i in arr %}',
    '  <strong>',
    '    Hello World',
    '  </strong>',
    '{% endfor %}'
  ));

});

test('XHTML', t => {

  const dedent = xhtml`
    <div>
      Hello World
      <br />
    </div>
  `;

  t.deepEqual(dedent, join(
    '<div>',
    '  Hello World',
    '  <br />',
    '</div>'
  ));

});

test('XML', t => {

  const dedent = xml`
    <?xml version="1.0" encoding="UTF-8"?>
    <dog>
        <name>Sissel</name>
        <breed>Perro sin Pelo del Peru</breed>
    </dog>
  `;

  t.deepEqual(dedent, join(
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<dog>',
    '    <name>Sissel</name>',
    '    <breed>Perro sin Pelo del Peru</breed>',
    '</dog>'
  ));

});

test('JSON', t => {

  const dedent = json`
    {
      "prop": [
        {
          "item": "foo"
        }
      ]
    }
  `;

  t.deepEqual(dedent, join(
    '{',
    '  "prop": [',
    '    {',
    '      "item": "foo"',
    '    }',
    '  ]',
    '}'
  ));

});

test('JSONC', t => {

  const dedent = jsonc`
    {
      /* comment */
      "prop": [
        {
          // comment
          "item": "foo"
        }
      ]
    }
  `;

  t.deepEqual(dedent, join(
    '{',
    '  /* comment */',
    '  "prop": [',
    '    {',
    '      // comment',
    '      "item": "foo"',
    '    }',
    '  ]',
    '}'
  ));

});

test('YAML', t => {

  const dedent = yaml`
    foo: 'bar'
    arr:
      - one
      - two
  `;

  t.deepEqual(dedent, join(
    "foo: 'bar'",
    'arr:',
    '  - one',
    '  - two'
  ));

});

test('CSS', t => {

  const dedent = css`
    .class {
      font-size: 16px;
      color: white;
    }
  `;

  t.deepEqual(dedent, join(
    '.class {',
    '  font-size: 16px;',
    '  color: white;',
    '}'
  ));

});

test('SCSS', t => {

  const dedent = scss`
    $var: 16px;

    .class {
      font-size: $var;
      color: white;
    }
  `;

  t.deepEqual(dedent, join(
    '$var: 16px;',
    '',
    '.class {',
    '  font-size: $var;',
    '  color: white;',
    '}'
  ));

});

test('SASS', t => {

  const dedent = sass`
    $var: 16px;

    .class
      font-size: $var;
      color: white;

  `;

  t.deepEqual(dedent, join(
    '$var: 16px;',
    '',
    '.class',
    '  font-size: $var;',
    '  color: white;'
  ));

});

test('JavaScript', t => {

  const dedent = js`

    const foo = () => {

      return 'bar'

    };

  `;

  t.deepEqual(dedent, join(
    'const foo = () => {',
    '',
    "  return 'bar'",
    '',
    '};'
  ));

});

test('JSX', t => {

  const dedent = jsx`

    const foo = (prop) => {

      return <Component name={prop} />;

    };

  `;

  t.deepEqual(dedent, join(
    'const foo = (prop) => {',
    '',
    '  return <Component name={prop} />;',
    '',
    '};'
  ));

});

test('TypeScript', t => {

  const dedent = ts`

    const foo = (prop: string) => {

      return prop;

    };

  `;

  t.deepEqual(dedent, join(
    'const foo = (prop: string) => {',
    '',
    '  return prop;',
    '',
    '};'
  ));

});

test('TSX', t => {

  const dedent = tsx`

    const foo = (prop: { name: string }) => {

      return <Component name={prop.name} />;

    };

  `;

  t.deepEqual(dedent, join(
    'const foo = (prop: { name: string }) => {',
    '',
    '  return <Component name={prop.name} />;',
    '',
    '};'
  ));

});

test('Markdown', t => {

  const dedent = md`

    # Title

    Hello **World**

  `;

  t.deepEqual(dedent, join(
    '# Title',
    '',
    'Hello **World**'
  ));

});
