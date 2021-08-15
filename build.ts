import { minify } from "https://cdn.skypack.dev/terser?dts";

type Pair = {
  code?: string;
  map?: string;
};

try {
  // Get tsconfig.json
  const tsconfig = await Deno.readTextFile("tsconfig.json");
  const compilerOptions = JSON.parse(tsconfig).compilerOptions;

  // Bundle main.ts
  const { files } = await Deno.emit("./main.ts", {
    bundle: "module",
    compilerOptions,
  });

  // Create code/sourcemap pairs
  const pairs = Object.entries(files).reduce((pairs, entry) => {
    const fileName = entry[0].replace("deno:///", "");
    const key = fileName.replace(".map", "");
    const isMap = fileName.includes(".map");

    if (pairs[key] === undefined) {
      pairs[key] = {};
    }

    if (isMap) {
      pairs[key].map = entry[1];
    } else {
      pairs[key].code = entry[1];
    }

    return pairs;
  }, {} as Record<string, Pair>);

  // Write bundle to local directory
  for (const [key, pair] of Object.entries(pairs)) {
    if (pair.code === undefined) {
      throw new Error(`No code found for ${key}`);
    }

    const { code } = await minify({ [key]: pair.code });
    // const { code, map } = pair;

    if (typeof code === "string") {
      Deno.writeTextFileSync(key, code);
    }
  }
} catch (e) {
  console.error(e);
  // something went wrong, inspect `e` to determine
}
