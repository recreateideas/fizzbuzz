const { fizzbuzz } = require("./fizzbuzz");

const getMultiples = (array, num) => array.filter((_, i) => +i % +num === 0);
/**
 * TDD is all about describing the app sceification by writing tests.
 * Tests should fail at first and this will force use to write the minimum amount of code to make them succeed.
 */
describe("fizzbuzz", () => {
  /**
   * start by defining what the test is expecting.
   */
  it("should be exported and be a function", () => {
    const type = typeof fizzbuzz;
    expect(fizzbuzz).toBeTruthy();
    expect(type).toBe("function");
  });
  /**
   * Then add 1 requirement by adding a test to describe what needs to be achieved
   */
  it("should return an array of length 100", () => {
    const result = fizzbuzz();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(100);
  });
  /**
   * Now we check for the type of the items to be the correct format. We are expecting either numbers or strings.
   */
  it("should have numbers or strings as items", () => {
    const result = fizzbuzz();
    let iterator = 0;
    const a = result.every((item) => {
      const isString = typeof item === "string";
      const isNumber = typeof item === "number";
      iterator++;
      return isString || isNumber;
    });
    expect(a).toBe(true);
    expect(iterator).toBe(100);
  });
  /**
   * we progress by demanding a specif type for a specific position/item.
   */
  it("should have a string item if the item is a multiple of 3", () => {
    const result = fizzbuzz();
    const multiplesOfThree = getMultiples(result, 3);
    expect(
      multiplesOfThree.every((item) => typeof item === "string")
    ).toBeTruthy();
  });
  /**
   * we progress by being more restrictive on the condition.
   */
  it("should have a string item if the item is a multiple of 3, 5 and numbers otherwise", () => {
    const result = fizzbuzz();
    const multiplesOfThree = getMultiples(result, 3);
    const multiplesOfFive = getMultiples(result, 5);
    const otherNumbers = result.filter(
      (item, i) => +i % 3 !== 0 && +i % 5 !== 0
    );
    expect(
      multiplesOfThree.every((item) => typeof item === "string")
    ).toBeTruthy();
    expect(
      multiplesOfFive.every((item) => typeof item === "string")
    ).toBeTruthy();
    expect(otherNumbers.every((item) => typeof item === "number")).toBeTruthy();
  });
  /**
   * we progress by being more restrictive on the condition.
   */
  it("for multiples of 3 the string should be either 'fizz' 'buzz' or 'fizzbuzz'", () => {
    const result = fizzbuzz();
    const multiplesOfThree = getMultiples(result, 3);
    const multiplesOfFive = getMultiples(result, 5);
    expect(
      multiplesOfThree.every((item) =>
        ["fizz", "buzz", "fizzbuzz"].includes(item)
      )
    ).toBeTruthy();
    expect(
      multiplesOfFive.every((item) =>
        ["fizz", "buzz", "fizzbuzz"].includes(item)
      )
    ).toBeTruthy();
  });
  /**
   * [final codition]
   */
  it("for multiples of 3 the string should be 'fizz' and multiples of 5 'buzz', multiple of both 'fizzbuzz'", () => {
    const result = fizzbuzz();
    expect(
      result.every((item, i) => {
        if (i % 3 === 0 && i % 5 === 0) {
          return item === "fizzbuzz";
        }
        if (i % 3 === 0) {
          return item === "fizz";
        }
        if (i % 5 === 0) {
          return item === "buzz";
        }
        return true;
      })
    ).toBeTruthy();
  });
  /**
   * [second final codition]
   */
  it("for all other items, they should be the a number, equal to the index", () => {
    const result = fizzbuzz();
    expect(
      result.every((item, i) => {
        if (i % 3 !== 0 && i % 5 !== 0) {
          return typeof item === "number" && item === i;
        }
        return true;
      })
    ).toBeTruthy();
  });
});
