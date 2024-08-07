const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

let result = transactions.filter((tran) => {
  if (tran[0].includes("income")) {
    return transactions;
  }
});

let result1 = transactions.filter((tran) => {
  if (tran[0].includes("expense")) {
    return transactions;
  }
});

let sum = 0;

transactions.forEach((transactions) => {
  if (transactions[0].includes("income")) {
    sum = transactions[1] + sum;
  }
});

let sum2 = 0;
transactions.forEach((transactions) => {
  if (transactions[0].includes("expense")) {
    sum2 = transactions[1] + sum2;
  }
});

let sum3 = 0;

transactions.forEach((transactions) => {
  if (transactions[0].includes("income")) {
    sum3 = transactions[1] + sum3;
  } else if (transactions[0].includes("expense")) {
    sum3 = sum3 - transactions[1];
  }
});

let = result3 = transactions.filter((transactions) => {
  if (transactions[1] > 500) {
    return true;
  }
});

console.log(result);
console.log(result1);
console.log(sum);
console.log(sum2);
console.log(sum3);
console.log(result3);
