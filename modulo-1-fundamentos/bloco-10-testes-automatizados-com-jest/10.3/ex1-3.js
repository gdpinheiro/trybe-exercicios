const randomNumber = () => {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = randomNumber;
