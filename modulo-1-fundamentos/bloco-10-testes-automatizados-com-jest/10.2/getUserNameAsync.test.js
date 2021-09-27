const users = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Paul" },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe("Tests the getUserName function", () => {
  it("checks the function callback", async () => {
    try {
      await expect(getUserName(1)).resolves.toBe("Mark");
    } catch (error) {
      await expect(error).rejects.toEqual(
        new Error(`User with ${id} not found.`)
      );
    }
  });
});
