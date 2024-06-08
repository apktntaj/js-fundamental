function once(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

const tes = once((num1, num2) => num1 + num2);

console.log(tes(2, 5));
console.log(tes(2, 5));
console.log(tes(2, 5));
