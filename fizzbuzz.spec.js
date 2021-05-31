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
});
