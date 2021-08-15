import { html, render } from "https://cdn.skypack.dev/lit-html?dts";
import { create, event } from "https://cdn.skypack.dev/most-subject?dts";
import {
  runEffects,
  startWith,
  tap,
} from "https://cdn.skypack.dev/@most/core?dts";
import {
  currentTime,
  newDefaultScheduler,
} from "https://cdn.skypack.dev/@most/scheduler?dts";

// deno-lint-ignore no-explicit-any
declare const document: any;

// Stream
const scheduler = newDefaultScheduler();

const [sink, stream] = create<number>();

const next = (n: number) => event(currentTime(scheduler), n, sink);

// Template
const hello = (count: number, click: () => void) =>
  html`<h1>${count}</h1><button @click=${click}>Add 1</button>`;

const update = (n: number) =>
  render(hello(n, () => next(n + 1)), document.body);

runEffects(tap(update, startWith(0, stream)), scheduler);
