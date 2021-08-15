import { html, render } from "https://cdn.skypack.dev/lit-html?dts";

const hello = (name: string, count: number, click: () => void) =>
  html`
<h1>Hello ${name}</h1>
<p>${count}</p>
<button @click=${click}>Click Me</button>
`;

// deno-lint-ignore no-explicit-any
declare const document: any;

const run = (value: unknown) => render(value, document.body);

const setup = () => {
  let count = 0;
  const update = () => run(hello("brandon", count, inc));

  const inc = () => {
    count++;
    update();
  };

  update();
};

setup();
