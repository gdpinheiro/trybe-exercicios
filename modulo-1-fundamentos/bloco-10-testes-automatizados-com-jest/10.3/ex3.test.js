const multiply = require("./ex1-3");
jest.mock("./ex1-3.js");

describe("Tests the multiply function", () => {
  it("should multiply three numbers and return the value", () => {
    multiply.mockImplementation((a, b, c) => a * b * c);
    expect(multiply(2, 3, 4)).toBe(24);
  });
  multiply.mockReset();
  it("should double the number used as parameter", () => {
    multiply.mockImplementation((a) => a * 2);
    expect(multiply(2)).toBe(4);
  });
});
