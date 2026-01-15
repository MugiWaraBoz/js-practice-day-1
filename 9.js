let input = prompt("Enter Salary seperated by space:");

let numbers = input.split(" ").map(Number);

let livingExpenses = Number(prompt("Living Expense: "));

let monthlySavings = (array, livingCost) => {
  let type = typeof numbers;
  if (type != "object") {
    console.log("Invalid String");
  }

  type = typeof livingCost;
  if (type != "number") {
    console.log("Invalid String");
  }

  let total = 0;
  let tax = 0.2;
  array.forEach((num) => {
    if (num >= 3000) {
      total += num - num * tax;
    } else {
      total += num;
    }
  });

  return total - livingExpenses;
};

let saved = monthlySavings(numbers, livingExpenses);

if (saved < 0) console.log("earn more");
else console.log(saved);
