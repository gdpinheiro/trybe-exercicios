const encode = require("../encode");

describe("Test the encode function", () => {
  it("checks if encode is a function", () => {
    expect(typeof encode).toBe("function");
  });
  it("checks if the vows [a, e , i, o, u] are encoded to [1, 2, 3 4, 5] ", () => {
    expect(encode("a, e, i, o, u")).toBe("1, 2, 3, 4, 5");
  });
  it("checks if other letters are not encoded", () => {
    expect(encode("hello")).toBe("h2ll4");
  });
  it("checks if the string returned is has the same length as the string used as parameter", () => {
    expect(encode("hello")).toHaveLength(5);
  });
});
