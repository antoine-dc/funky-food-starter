import { it, expect, describe } from "vitest";
import { sum, div } from "./../src/utils/sum";

describe("sum function", () => {
  it("Should adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("Should adds 3 + 5 to equal 8", () => {
    expect(sum(3, 5)).toBe(8);
  });

  it("Should adds 10 + (-2) to equal 8", () => {
    expect(sum(10, -2)).toBe(8);
  });
});

describe("div function", () => {
  it("Should divide 6 by 2 to equal 3", () => {
    expect(div(6, 2)).toBe(3);
  });

  it("Should divide 10 by 2 to equal 5", () => {
    expect(div(10, 2)).toBe(5);
  });
});
