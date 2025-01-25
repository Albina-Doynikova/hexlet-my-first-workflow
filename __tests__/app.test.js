// __tests__/app.test.js
function sayHello() {
  return "Hello, World!";
}

test('sayHello возвращает "Hello, World!"', () => {
  expect(sayHello()).toBe("Hello, World!");
});
