const funcComposition = (arr) => {
  //   return function (x) {
  //     for (const funct of arr.reverse()) {
  //       x = funct(x);
  //     }

  //     return x;
  //   };

  return function (x) {
    arr.map((fn) => {
      x = fn(x);
    });

    return x;
  };
};

const myArr = [(x) => x + 1, (x) => x * 2];
const tes = funcComposition(myArr);

console.log(tes(4));
