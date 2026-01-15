let isLeap = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else return false;
};

let year = prompt("Year");

if (isLeap(year)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
