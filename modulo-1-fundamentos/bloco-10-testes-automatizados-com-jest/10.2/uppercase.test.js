const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe("Test for the uppercase function", () => {
  it("checks uppercase callback", (done) => {
    uppercase("teste", (result) => {
      try {
        expect(result).toBe("TESTE");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
