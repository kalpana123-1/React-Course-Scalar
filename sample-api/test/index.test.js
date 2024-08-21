const { add, subtract, multiply, divide } = require("../app");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiplies 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divides 6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});

test("multiply  5 * 0 to equal 0", () => {
  expect(multiply(5, 0)).toBe(0);
});

test("subtract  5 - 0 to equal 5", () => {
  expect(subtract(5, 0)).toBe(5);
});

test("add  5 + 0 to equal 5", () => {
  expect(add(5, 0)).toBe(5);
});
