const decode = require("../decode");

describe("Test the decode function", () => {
  it("checks if decode is a function", () => {
    expect(typeof decode).toBe("function");
  });
  it("checks if the vows [a, e , i, o, u] are decoded to [1, 2, 3 4, 5] ", () => {
    expect(decode("1, 2, 3, 4, 5")).toBe("a, e, i, o, u");
  });
  it("checks if other letters are not decoded", () => {
    expect(decode("h2ll4")).toBe("hello");
  });
  it("checks if the string returned is has the same length as the string used as parameter", () => {
    expect(decode("hello")).toHaveLength(5);
  });
});
