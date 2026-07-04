import { describe, expect, it } from "vitest";
import { capitalize, isEven, sum } from "../src/utils.js";

describe("utils functions", () => {
  it("sum adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });

  it("isEven returns true for even numbers and false for odd numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
    expect(isEven(0)).toBe(true);
  });

  it("capitalize returns the string with first letter uppercase", () => {
    expect(capitalize("agenda")).toBe("Agenda");
    expect(capitalize("Agenda")).toBe("Agenda");
    expect(capitalize(123)).toBe("");
    expect(capitalize("")).toBe("");
  });
});
