var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longestName = (array) => {
  let name;
  let len = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > len) {
      name = array[i];
      len = array[i].length;
    }
  }
  return name;
};

console.log(longestName(friends));
