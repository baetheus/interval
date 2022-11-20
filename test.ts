export const test = <A>(a: A) => <B>(b: B): A | B => typeof a === "number" ? a : b;
