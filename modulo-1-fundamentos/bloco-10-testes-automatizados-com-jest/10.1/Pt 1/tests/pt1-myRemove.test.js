const myRemove = require("../pt1-myRemove");

describe("Test myRemove Function", () => {
  it("check if myRemove([1, 2, 3, 4], 3) returns the expected array", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("check if myRemove([1, 2, 3, 4], 3) doesn't return the array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("check if the array used as a parameter doesn't suffered any changes ", () => {
    const testArray = [1, 2, 3, 4];
    myRemove(testArray);
    expect(testArray).toEqual([1, 2, 3, 4]);
  });
  it("check if myRemove([1, 2, 3, 4], 5) returns the expected array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
