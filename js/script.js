"use strict";

const money = +prompt('Ваш бюджет на месяц');
const time = prompt('Введите дату в формате YYYY-MM-DD');

const firstExpense = prompt('Введите обязательную статю расходов в этом месяце');
const firstExpenseCost = +prompt('Во сколько обойдется?');
const secondExpense = prompt('Введите обязательную статю расходов в этом месяце');
const secondExpenseCost = +prompt('Во сколько обойдется?');

console.log(secondExpense);
console.log(typeof(secondExpense));

let appData = {
  money,
  time,
  expenses: {
        
  },
  optionalExpenses: {
 
  },
  income: {

  },
  savings: false
};

appData.expenses[firstExpense] = firstExpenseCost;
appData.expenses[secondExpense] = secondExpenseCost;

console.log(appData.expenses[firstExpense]);

let remainMoneyPerDay = (money - (appData.expenses[firstExpense] + appData.expenses[secondExpense])) / 30;

console.log(appData);
console.log(remainMoneyPerDay);
console.log(typeof(remainMoneyPerDay));