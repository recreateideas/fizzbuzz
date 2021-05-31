const fizzbuzz = () => {
  return new Array(100).fill("").map((_, i) => {
    if (i % 3 === 0 && i % 5 === 0) {
      return "fizzbuzz";
    }
    if (i % 3 === 0) {
      return "fizz";
    }
    if (i % 5 === 0) {
      return "buzz";
    }
    return i;
  });
};

module.exports = {
  fizzbuzz,
};
