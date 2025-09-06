import { describe, it } from "node:test";
import assert from "node:assert";
import { getGreeting } from "#lib/greeting.ts";

describe("Greeting Lib", () => {
  it("should return the expected greeting when no name is passed", () => {
    const greeting = getGreeting();

    assert.strictEqual(greeting, "Hello World!");
  })

  it("should return the expected greeting when a name is passed", () => {
    const name = "NodeJS";
    const greeting = getGreeting(name);

    assert.strictEqual(greeting, `Hello ${name}!`);
  })
})