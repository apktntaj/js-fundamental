const map = (arr, fn) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }

  return res;
};

const myArray = [1, 2, 3, 4, 5];
const tes = map(myArray, (n) => {
  return n * n;
});

console.log(tes);
