const fetch = require("node-fetch");

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// "sd-01-week4-5-project-todo-list"
// "sd-01-week4-5-project-meme-generator"

describe("Tests the getRepos function", () => {
  it("checks if the repos are contained", async () => {
    const url = "https://api.github.com/orgs/tryber/repos";

    return getRepos(url).then((result) => {
      expect(result).toContain("sd-01-week4-5-project-todo-list");
      expect(result).toContain("sd-01-week4-5-project-meme-generator");
    });
  });
});
