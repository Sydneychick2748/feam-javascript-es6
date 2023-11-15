

// Create a new array where each number is increased by one using .map()
let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];

function incOne() {
  newArr = arr.map(item => item + 1);
}

// Call the function
incOne();

console.log(newArr);





//Exercise 2

/*
Refactor this using map. log the new array to the console.*/

const numbers = [65, 44, 12, 4];
let newNum = []
function myFunction(numArr) {
  newNum = numArr.map((item)=> item*10)
  
}
myFunction(numbers)
console.log(newNum, "newNum")




