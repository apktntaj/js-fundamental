const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const hello = createHelloWorld();

console.log(hello());
