/*Refactor each function below into an arrow function. You must also call the function and make sure it works */

/*Make sure to check that everything works as expected in the console before turning in your work */

/*Exercise 1*/
let weather = "rain";
if(weather === "rain") {
    console.log("Please wear rain boots")
}



//refactor below
let weather1 = "rain";
const getWeather = () => { 
  weather1 === "rain" ? console.log("Please wear rain boots") : console.log("No need to wear rain boots")

}
getWeather()








/*Exercise 2*/
let student = true 
let loggedIn = true
if(student == true && loggedIn == true) {
    console.log("This is where we would write the code to show the entire site")
}

//refactor below
let student1 = true
let loggedIn1 = true

const getInformation = ()=>{
  student1 == true && loggedIn1 == true ? console.log("This is where we would write the code to show the entire site"): console.log("do nothing ")
}

getInformation()






/*Exercise 3*/
let cash = 18;
let lunch = "";

if (cash < 10) {
  lunch = "sandwich";
}else if (cash <= 20 && cash > 11) {
  lunch = "fancy sandwich";
}else if (cash > 20) {
  lunch = "lobster rolls";
} 
console.log(lunch)
//refactor below


let cash1 = 18;
let lunch1 = "";


const getLunch = ()=>{

  cash1< 10
  ?(lunch1 = "sandwich")
  :cash1 <= 20 && cash1 > 11
  ?(lunch1= "fancy sandwich")
  :cash1 > 20
  ?(lunch1 = "lobster rolls")
  :"no sandwich";
   
}
getLunch()
console.log(lunch1)