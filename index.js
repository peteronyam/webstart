// console.log(`HELLO`);
// console.log('I like coding');

// // window.alert(`This is an alert`);

// //this is a comment

// document.getElementById("HEADER1").textContent = `my dome file`;
// document.getElementById("myip").textContent = `this is the second paragraph of the dom file`;
// /* this is a long paragraph comment
// we should not see this in the console */
// let x;
// let y;
// x = 100;
// y = "pips";
// console.log(x, y);
// let age = 25;
// let price = 999;
// let gpa = 2.1;
// let time = "tip";
// console.log(`you are ${age} years old`);
// console.log(`the price is: $${price}`);
// console.log(`your gpa is: $(gpa)`);
// console.log(typeof(age));

// let students = 30;
// // students = students + 3;
// students **= 5;
// students %= 5;
// console.log(students);

// username =window.prompt("what is your Username?");
// console.log(username);


// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("user").value;
//     console.log(username);
// }
// let username;

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("user").value;
//     document.getElementById("head1").textContent = `Hello ${username}`;
// }

// let age;
// let username;

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("user").value;
//     age = document.getElementById("age").value;
//     age = Number(age);
//     age += 2;
//     document.getElementById("head1").textContent = `Hello ${username}`;
//     console.log(username);
//     console.log(age);
// }

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt(`enter the radius of the circle`);
// radius = Number(radius);

// circumference = 2 * PI * radius;
// let circle = Number(circumference);
// console.log(circle);

// document.getElementById("sum").onclick = function(){
//     radius = document.getElementById("text").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myh3").textContent = circumference + "cm";
// }

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLebel = document.getElementById("countLebel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLebel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countLebel.textContent = count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     countLebel.textContent = count;
// }

// let x = 3.68;
// let y = 2;
// let z;

// z = Math.round(x);
// console.log(z);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);

// let max = Math.max(x,y);
// console.log(z)
// console.log(max)

// let c = (10, 20, 3, -50);
// console.log(Math.min(c))
// Random number generator
// const min = 10;
// const max = 1000;
// let randomNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum);
// const myBtn = document.getElementById("myBtn");
// const myLeb1 = document.getElementById("myLeb1");
// const myLeb2 = document.getElementById("myLeb2");
// const myLeb3 = document.getElementById("myLeb3");
// const min = 1;
// const max = 10;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// myBtn.onclick = () => {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     myLeb1.textContent = randomNum1;
//     myLeb2.textContent = randomNum2;
//     myLeb3.textContent = randomNum3;
// }


// let age = 30;
// if (age >= 18){
//     console.log('you are eligible')
// }
// else{
//     console.log("skip to the next file")
// }
// let time = 14;
// let AM = ":00AM";
// let PM = ":00PM"
// let date = Date("2024-09-09");
// if(time <= 12){
//     console.log(`good mornding, the time is:${time}:00AM`)
// }else{
//     console.log(`welscome back \n${date}`);
// }

// let isStudent = true;
// let age = 18;
// const yes = `Congratulations, you meet the basic requirement`;
// const no = `You are below the age required to access this page`;

//  if(isStudent){
//     console.log(`you arre underage`)
//     if(age <= 2){
//         console.log(`you are a student and old enogh to drive`)
        
    
//     }else(
//       document.getElementById("yes").onclick = function(){
//         yes = document.getElementById("yes").textContent = yes;
//        }
//     )
//  }else(
//     document.getElementById("no").onclick = () => {
//         no = document.getElementById("no").textContent = no;
//     }
//  )

// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i +1));
// };
// let result = "";
//  for(const row of rows){
//     result = result + "\n" + row;
//  };
//  console.log(result);

//  function padRow(name) {
//     return "Hello!";
//   };
//   const call = padRow();
//   console.log(call);

//   function addTwoNumbers(lastName,firstName){
//     return (lastName) + (firstName);
//   };
//   let sum;
//   addTwoNumbers(5,10);
//   sum = addTwoNumbers(5,10);
//   console.log(sum)

// const myage = document.getElementById("myage");
// const submit = document.getElementById("submit");
// const resultElement = document.getElementById("resultElement");
// let age;

// submit.onclick = function(){
//   age = myage.value;
//   age = Number(age);
//   if (age >= 100){
//     resultElement.textContent = `you are Too old enough to enter this site`;
//   }
//   else if(age == 0){
//     resultElement.textContent = `Your age cannot be less than 0`;
//   }
//   else if(age >=18){
//     resultElement.textContent = `You can use the full features of this site, terms and conditions apply`;
//   }
//   else if(age < 0){
//     resultElement.textContent = `You can't enter. you are not a human`;
//   }
//   else{
//     resultElement.textContent = `you must be 18+ to enter this site`;
//   }
// }
// const mycheck = document.getElementById("mycheck");
// const visaBtn = document.getElementById("visaBtn");
// const masterBtn = document.getElementById("masterBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mysum = document.getElementById("mysum");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mysum.onclick = function(){
//   if(mycheck.checked){
//     subResult.textContent = `You are subscribed`
//   }
//   else{
//     subResult.textContent = `You are Not subscribed`;
//   }

//   if(visaBtn.checked){
//     paymentResult.textContent = `you have selected visa as your prefered method`;
//   }
//   else if(masterBtn.checked){
//     paymentResult.textContent = `you have selected master card as your payment method.`
//   }
//   else if(paypalBtn.checked){
//     paymentResult.textContent = `you have selected paypal as your peyment method`
//   }
//   else {
//     paymentResult.textContent = `you havae to select a payment method to proceed`;
//   }
// }
// let isStudent = false;
// let fact = isStudent ? "You are a student": "you are NOT a student";
// console.log(fact);

// let purchaseAmount = 10;
// let discount = purchaseAmount >= 100 ? 10: 0;
// console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// let day = 4;

// switch(day){
//   case 1:
//     console.log('today is monday')
//     break;
//    case 2:
//     console.log("it is tuesday") ;
//     break;
//   case 3:
//     console.log("it is wednesday");
//     break;
//   case 4:
//     console.log("it is thursday");
//     break;
//   case 5:
//     console.log("it is friday");
//     break;
//   case 6:
//     console.log("it is saturday");
//     break;
//   case 7:
//     console.log("it is sunday");
//     break;
//   default:
//     console.log(`${day} is not a day`)
// }

// let testScore = 90;
// let letterGrade;
// switch(true){
//   case testScore >= 80:
//     letterGrade = `You got an A.
//     You have passed the course`;
//     break;
//   case testScore >= 70:
//     letterGrade = "B";
//     break;
//   case testScore >= 60:
//     letterGrade = "C";
//     break;
//   case testScore >= 50:
//     letterGrade = "D";
//     break;
//   case testScore >= 40:
//     letterGrade = "E";
//     break;
//   case testScore <= 39:
//     letterGrade = "F";
//     break;
//   default:
//     letterGrade = `you result is not uploaded yet`;
// }
// console.log(letterGrade)

// let userName = "Bro code";

// userName.charAt(0)

// console.log(userName.charAt(1))

// console.log(userName.indexOf("o"))
// console.log(userName.lastIndexOf("o"))
// console.log(userName.length);
// console.log(userName.trim().toUpperCase())
// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase().repeat(4))
// let result =userName.startsWith(" ");
// let num = userName.includes(" ");
// console.log(num)
// console.log(result)

// if(result){
//   console.log(`Your username is not supposed to start with a whitespace`)
// }
// else if(num){
//   console.log(`your username must not include a white space`);
// }
// else{
//   console.log(userName.trim());
// }

// let phoneNumber = "234-5860-964-45";

// phoneNumber = phoneNumber.replaceAll("-", "");
// // phoneNumber = phoneNumber.padStart("11", "");
// phoneNumber = phoneNumber.padEnd(5, ("0"));
// console.log(phoneNumber)

// const fullName = "Peter Onyam";
//  let firstName = fullName.slice(0, 5);
//  console.log(firstName);
//  let lastName = fullName.slice(6);
//  console.log(lastName);
//  let firstChar = fullName.slice(0,1);
//  console.log(firstChar)
//  let lastChar = fullName.slice(-1)
//  console.log(lastChar);
//  let first = fullName.slice(0, fullName.indexOf(" "));
//  console.log(first)
//  let last = fullName.slice(fullName.indexOf(" ") + 1)
//  console.log(last)

 const email = "peteronyam@gmail.com";
 let useme = email.slice(0, email.indexOf("@"));
 let domain = email.slice(email.indexOf("@") +1)
 console.log(domain.toUpperCase())
 console.log(`your username is ${useme.toUpperCase()}`)


//  let namein = window.prompt(`Enter your username`);

//  namein = namein.trim();
//  let letter = namein.charAt(0);
//  letter = letter.toUpperCase();
// NO METHOD CHAINING
//  let extraChar = namein.slice(1);
//  extraChar = extraChar.toLowerCase();
//  namein = letter + extraChar;
//  console.log(namein);

// METHOD CHAINING
//  namein = namein.trim().charAt(0).toUpperCase() + namein.trim().slice(1).toLowerCase();
//  console.log(namein);

//  LOGICAL OPERATORS

// const temp = 2;
// if(temp > 0 && temp <= 30){
//   console.log(`it is ${temp} degrees and the weather is good`)
// }else{
//   console.log("the weather is not friendly!")
// }

// const file = window.prompt(`Enter any text`);

// if(file > 10 && file <= 50){
//   console.log(`you have eneter ${file} and it is up to the range of numbers`)
// }
// else if(file >= 51 || file == 60){
//   console.log(`you have enteredthe wrong command`);
// }
// else if(file > 65){
//   console.log(`try again`)
// }


// const character = "#";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }

// for (let i = count; i > 0; i = i - 1) {
//   rows.push(padRow(i, count))
// }

// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);
//  console.log("the is the beginning of another line")

// // for (let i = 1; i <= count; i++) {
// //   rows.unshift(padRow(i, count));
// // }
// let inverted = true;

// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   }
// }

// let rates = ""

// for (const row of rows) {
//   rates = rates + "\n" + row;
// }

// console.log(rates);

// NEW CLEANER VERSION

const characterP = "!";
const countP = 10;
const rowsP = [];
let invertedP = false;


function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + characterP.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= countP; i++) {
  if (invertedP) {
    rowsP.unshift(padRow(i, countP));
  } else {
    rowsP.push(padRow(i, countP));
  }
}

let resultP = ""

for (const rowP of rowsP) {
  resultP = resultP + "\n" + rowP;
}

console.log(resultP);


// Step 1
// A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

// Complete the getAverage function which takes in an array of test scores and returns the average score.

// The average is calculated by adding up all the scores and dividing by the total number of scores.

// Example Code
// average = sum of all scores / total number of scores
// A couple of function calls have been provided for you so you can test out your code.

// Tips
// You can use a loop to iterate over the scores array and add up all the scores.
// You can use the length property to get the total number of scores.


function getAverage(scores) {
  let total = 0;

  for(let score of scores){
    total += score;
  }
  let average = total / scores.length;
  return average
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// // Step 2
// Now the teacher needs your help converting the student score to a letter grade.

// Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

// Here are the scores and their corresponding letter grades:

// Score Range	Grade
// 100	"A++"
// 90 - 99	"A"
// 80 - 89	"B"
// 70 - 79	"C"
// 60 - 69	"D"
// 0 - 59	"F"
// Tips

// Remember that you learned about conditional statements (if, else if, and else).
// Remember that you learned about comparison operators (>, <, >=, <=, ===).


function getGrade(score) {
  if(score == 100){
    return "A++";
  }else if(score >= 90 && score <= 99){
    return "A"
  }else if(score <= 89 && score >= 80){
    return "B"
  }else if(score >= 70 && score <= 79){
    return "C"
  }else if(score <= 69 && score >= 60){
    return "D"
  }else if(score >= 0 && score <= 59){
    return "F"
  }else{
    console.log("scores not found")
  }

}

console.log(getGrade(100));
console.log(getGrade(92));
console.log(getGrade(82));
console.log(getGrade(73));
console.log(getGrade(67));
console.log(getGrade(56));