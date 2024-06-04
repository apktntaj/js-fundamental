const filter = (arr, fn) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
};

const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tes = filter(arrr, (num) => num % 2 === 0);

console.log(tes);
