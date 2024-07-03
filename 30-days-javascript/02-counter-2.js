const Counter = (count) => {
  let initValue = count;

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  function reset() {
    count = initValue;
    return count;
  }
  return {
    increment,
    decrement,
    reset,
  };
};

const counter = Counter(10);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
