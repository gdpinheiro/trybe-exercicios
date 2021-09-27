const [obj1, obj2, obj3] = require("../pt1-equalObject");

describe("Test equalObject function", () => {
  it("compare objects 1 and 2 and expect equality ", () => {
    expect(obj1).toEqual(obj2);
  });
  it("compare objects 1 and 3 and expect inequality", () => {
    expect(obj1).not.toEqual(obj3);
  });
});
