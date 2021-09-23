const { toUpperCase, firstLetter, concatStrings } = require("./ex4-5");
jest.mock("./ex4-5.js");

describe("Tests the toUpperCase function", () => {
  toUpperCase.mockImplementation((string) => string.toLowerCase());
  it("should return the lower case string", () => {
    expect(toUpperCase("TESTE")).toBe("teste");
  });
});

describe("Tests the firstLetter function", () => {
  firstLetter.mockImplementation((string) => string[string.length - 1]);
  it("should return the last Letter", () => {
    expect(firstLetter("Teste")).toBe("e");
  });
});

describe("Tests the concatStrings function", () => {
  concatStrings.mockImplementation(
    (string1, string2, string3) => string1 + string2 + string3
  );
  it("should concat three strings", () => {
    expect(concatStrings("Te", "s", "te")).toBe("Teste");
  });
});
