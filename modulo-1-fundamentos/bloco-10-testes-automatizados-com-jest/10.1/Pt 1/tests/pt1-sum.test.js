const sum = require("../pt1-sum");

describe("Sum function", () => {
  it("Test if 4+5=9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("Test if 0+0=0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("Test if an error is thrown when a string is used as an parameter", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });
  it('Tests if the error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});
