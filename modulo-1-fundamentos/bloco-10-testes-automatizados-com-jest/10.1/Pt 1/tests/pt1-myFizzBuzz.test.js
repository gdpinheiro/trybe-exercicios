const myFizzBuzz = require("../pt1-myFizzBuzz");

describe("Tests myFizzBuzz function", () => {
  it('check if a myFizzBuzz(15) return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it('check if myFizzBuzz(6) return "fizz"', () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });
  it('check if myFizzBuzz(10) return "buzz"', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  it("check if myFizzBuzz(4) return 4", () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('check if myFizzBuzz("teste") return false', () => {
    expect(myFizzBuzz("teste")).toBe(false);
  });
});
