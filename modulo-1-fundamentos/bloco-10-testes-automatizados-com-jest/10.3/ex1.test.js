const randomNumber = jest
  .fn(() => {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min);
  })
  .mockReturnValue(10);

describe("Tests the function randomNumber", () => {
  randomNumber;
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
