var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let ans = (a) => {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!newArray.find((num) => num == a[i])) {
      newArray.push(a[i]);
    }
  }
  return newArray;
};

console.log(...ans(numbers));
