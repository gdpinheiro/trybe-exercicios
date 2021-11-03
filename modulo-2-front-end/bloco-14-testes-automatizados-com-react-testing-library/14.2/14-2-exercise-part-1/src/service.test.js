import getRandomNumber from "./service";

describe("Tests the getRandomNumber function", () => {
  it("should return an integer", () => {
    const getRandomNumber = jest.fn().mockReturnValue(10);
    const result = getRandomNumber();

    expect(result).toBe(10);
    expect(getRandomNumber).toHaveBeenCalled();
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
  it("should divide two parameters", () => {
    const getRandomNumber = jest
      .fn()
      .mockReturnValue(10)
      .mockImplementationOnce((a, b) => a / b);
    expect(getRandomNumber(10, 5)).toBe(2);
    expect(getRandomNumber()).toBe(10);
  });
  it("should multiply three numbers", () => {
    const getRandomNumber = jest
      .fn()
      .mockImplementation((a, b, c) => a * b * c);

    expect(getRandomNumber(2, 3, 4)).toBe(24);

    getRandomNumber.mockReset();
    getRandomNumber.mockImplementation((a) => a * 2);

    expect(getRandomNumber(5)).toBe(10);
  });
});
