const myRemoveWithoutCopy = require("../pt1-myRemoveWithoutCopy");

describe("Tests myRemoveWithoutCopy function", () => {
  it("check if myRemoveWithoutCopy([1, 2, 3, 4], 3) returns the expected array", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("check if myRemoveWithoutCopy([1, 2, 3, 4], 3) doesn't return the array [1, 2, 3, 4]", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("check if the array used as parameter suffered changes ", () => {
    const testArray = [1, 2, 3, 4];
    expect(testArray).toEqual(myRemoveWithoutCopy(testArray, 3));
  });
  it("check if myRemoveWithoutCopy([1, 2, 3, 4], 5) return the expected array", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
