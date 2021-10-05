const { toUpperCase, firstLetter, concatStrings } = require("./ex4-5");
jest.mock("./ex4-5.js");

describe("Tests the toUpperCase function", () => {
  it("should return the lower case string", () => {
    toUpperCase.mockImplementationOnce((string) => string.toLowerCase());
    expect(toUpperCase("TESTE")).toBe("teste");
  });
  it("should perform like the original implementation", () => {
    toUpperCase.mockImplementation((string) => string.toUpperCase());
    expect(toUpperCase("teste")).toBe("TESTE");
  });
});
