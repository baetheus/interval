import { minify } from "https://cdn.skypack.dev/terser?dts";

const DENO_BUNDLE_KEY = "deno:///bundle.js";
const DEFAULT_INPUT = "main.ts";
const DEFAULT_OUTPUT = "bundle.js";
const DEFAULT_TSCONFIG = "tsconfig.json";

try {
  // Get tsconfig.json
  const tsconfig = await Deno.readTextFile(DEFAULT_TSCONFIG);
  const compilerOptions = JSON.parse(tsconfig).compilerOptions;

  // Bundle main.ts
  const { files } = await Deno.emit(DEFAULT_INPUT, {
    bundle: "module",
    compilerOptions,
  });

  // Get bundle.js from files object
  const bundle = files[DENO_BUNDLE_KEY];

  if (bundle === undefined) {
    throw new Error(`Unable to find bundle at key: ${DENO_BUNDLE_KEY}`);
  }

  // Minify code with terser
  const { code } = await minify({ [DEFAULT_INPUT]: bundle });

  // Output code to file
  if (typeof code === "string") {
    await Deno.writeTextFile(DEFAULT_OUTPUT, code);
  }
} catch (e) {
  console.error(e);
}
