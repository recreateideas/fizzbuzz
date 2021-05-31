const { fizzbuzz } = require("./fizzbuzz");
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
  it("should have a string item if the item is a multiple of 3 or five", () => {
    const result = fizzbuzz();
    const multiplesOfThree = result.filter((item) => +item % 3 === 0);
    expect(
      multiplesOfThree.every((item) => typeof item === "string")
    ).toBeTruthy();
  });
});
