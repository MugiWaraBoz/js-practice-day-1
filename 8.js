var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let BigNum = (array) => {
  let num = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }
  }
  return num;
};

console.log(BigNum(numbers));
