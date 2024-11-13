let expenses = {groceries: 150, dinningout: 100, transportation: 50, entertainment: 80};
let sum = 0;

for (const sum in expenses) {
  console.log(`expenses.${sum} = ${expenses[sum]}`);
};
  module.exports = {expenses};