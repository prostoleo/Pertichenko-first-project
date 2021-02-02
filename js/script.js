"use strict";

const money = +prompt('Ваш бюджет на месяц');
const time = prompt('Введите дату в формате YYYY-MM-DD');

const counter = +prompt(' Сколько у вас статей обязателньых расходов?');


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

let totalCost = 0;

for (let i = 0; i < counter; i++) {
  let expense = prompt('Введите обязательную статю расходов в этом месяце');
  let cost = +prompt('Во сколько обойдется?');
  totalCost += cost;

  if (expense && cost && typeof(expense) !=null && typeof(cost) !=null) {
    appData.expenses[expense] = cost;
  } else {
    alert(' Неправильно введены данные ');
    i--;
  }

  console.log(i);
}

appData.remainMoneyPerDay = (money - totalCost) / 30;

console.log(appData);
console.log(remainMoneyPerDay);
console.log(typeof(remainMoneyPerDay));