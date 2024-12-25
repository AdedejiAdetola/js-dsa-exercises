const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

//determine the maximum of the candies and store in a variable
const maxValue = Math.max(...candies);

console.log(maxValue);
//increment all values in the array by extraCandies
//compare each with the max of candies stored in a variable and return an array of boolean
const result = candies.map((x) => x + extraCandies >= maxValue);
console.log(result);
