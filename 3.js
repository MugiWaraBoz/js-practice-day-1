let arr = [
  12, 5, 19, 1, 8, 14, 3, 20, 7, 2, 17, 10, 6, 18, 9, 4, 16, 11, 15, 13,
];

function bubble_sort(a = []) {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20 - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
}

bubble_sort(arr);

console.log(...arr);
