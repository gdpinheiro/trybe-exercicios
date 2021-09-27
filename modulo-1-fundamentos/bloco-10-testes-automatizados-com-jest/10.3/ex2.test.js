const divide = require("./ex1-3");
jest.mock("./ex1-3.js");

describe("Tests the divide function", () => {
  divide.mockImplementationOnce((a, b) => a / b);
  it("should return the correct value", () => {
    expect(divide(10, 5)).toBe(2);
  });
  it("should only works once", () => {
    expect(divide(10, 5)).not.toBe(2);
  });
});
