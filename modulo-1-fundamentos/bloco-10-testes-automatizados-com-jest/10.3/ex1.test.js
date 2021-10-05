const randomNumber = require("./ex1-3");
jest.mock("./ex1-3.js");

describe("Tests the function randomNumber", () => {
  randomNumber.mockReturnValue(10);
  it("should have been called", () => {
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
  });
  it("should return 10", () => {
    expect(randomNumber()).toBe(10);
  });
  it("should have been called 2 times", () => {
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
});
