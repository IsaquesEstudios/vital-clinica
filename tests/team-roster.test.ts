import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

test("the clinic roster excludes the departed professional and retains ten members", () => {
  const source = readFileSync(new URL("../src/routes/a-clinica.tsx", import.meta.url), "utf8");
  const roster = source.match(/const professionals = \[([\s\S]*?)\];/)?.[1];
  if (!roster) throw new Error("Clinic roster not found");

  const names = Array.from(roster.matchAll(/name: "([^"]+)"/g), (match) => {
    const name = match[1];
    if (!name) throw new Error("Professional name not found");
    return name;
  });

  expect(names).toHaveLength(10);
  expect(names.some((name) => /tiago|hiroshi|koyanagui/i.test(name))).toBe(false);
});