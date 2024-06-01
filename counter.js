// FUNCTION APPROACH

// function createCounter(n) {
//   return function () {
//     return n++;
//   };
// }

// const counter = createCounter(10);

class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return this.n++;
  }
}

const counter = new Counter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
