/*Refactor each function below into an arrow function. You must also call the function and make sure it works */

/*Make sure to check that everything works as expected in the console before turning in your work */

/*Exercise 1*/
function addTwo(num1, num2) {
  return num1 + num2;
}
//refactor below
function addTwo(num1, num2) {
  return num1 + num2;
}

// Call the function with arguments (1, 2) and log the result
console.log(addTwo(1, 2), "addtwo");

const addTwoArrow = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoArrow(1, 2), "addtwoArrow");

/*Exercise 2*/
function templateLiteral(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}! Welcome to the most beautiful site in the world. We hope you learn everything you ever wanted to know and that your life from this day forward will be filled with joy, wonder and adventure. Thank you for stopping by!`;
}
// Call the function with arguments and log the result
console.log(templateLiteral("John", "Doe"));

//refactor below

const templateLiteralArrow = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}! Welcome to the most beautiful site in the world. We hope you learn everything you ever wanted to know and that your life from this day forward will be filled with joy, wonder and adventure. Thank you for stopping by!`;
};
// Call the function with arguments and log the result
console.log(templateLiteralArrow("John", "Doe"));

/*Exercise 3*/

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];

function hasDuplicates(arr) {
  const numMap = {};
  for (const num of arr) {
    if (numMap[num]) {
      return true;
    }
    numMap[num] = true;
  }

  return false;
}

// Console log the results
console.log(hasDuplicates(numbers1));
console.log(hasDuplicates(numbers2));

//refactor below

const hasDuplicatesArrow = (arr) => {
  const numMap = {};
  for (const num of arr) {
    if (numMap[num]) {
      return true;
    }
    numMap[num] = true;
  }

  return false;
};

// Console log the results
console.log(hasDuplicatesArrow(numbers1));
console.log(hasDuplicatesArrow(numbers2));

/*BONUS */

function validateUserCredentials(users, inputUsername, inputPassword) {
  // Use the Array.prototype.some() method to check if any user matches the input username and password
  return users.some(
    (user) => user.username === inputUsername && user.password === inputPassword
  );
}
console.log(validateUserCredentials());
