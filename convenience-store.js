// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(coins, amount) {
  // create an array that stores the values of each coin
  const values = [25, 10, 5, 1];
  // multiply the coins array times the values array
  const coinsValues = coins.map((num, index) => num * values[index]);
  // if the sum of the coinsValues is greater than or equal to the amount, return true
  console.log(coinsValues.reduce((a, b) => a + b) >= amount * 100);
}

changeEnough([25, 20, 5, 0], 4.25);
changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);
changeEnough([30, 40, 20, 5], 12.55);
changeEnough([10, 0, 0, 50], 3.85);
changeEnough([1, 0, 5, 219], 19.99);
