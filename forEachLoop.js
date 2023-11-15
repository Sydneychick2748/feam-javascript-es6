// Refactor the following forLoops to be forEach


//Exercise 1
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] , "ex1");

}

const numbers1 = [1, 2, 3, 4, 5];
function newLoop1(){
  numbers1.forEach((num,index )=>{
 numbers1[index] = num
  })

}
newLoop1()
console.log(numbers1, "newLoop1")





//Exercise 2
const scores = [65, 75, 80, 90, 85];

for (let i = 0; i < scores.length; i++) {
  scores[i] = scores[i] + 5;
}

console.log(scores,"ex2");


const scores1 = [65, 75, 80, 90, 85];

function newLoop2(){
  scores1.forEach((score,index)=>{
    scores1[index] = score +5
  })
}
newLoop2()
console.log(scores1, "newLoop2")







//Exercise 3
const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    filteredWords.push(words[i]);
  }
}

console.log(filteredWords, "ex3");


const words1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredWords1 = [];

function newLoop3(){
  words1.forEach((word,index)=>{
    if(word.length>5)
    filteredWords1.push(word ) ;
  })
}
newLoop3()
console.log(filteredWords1,"newLoop3")