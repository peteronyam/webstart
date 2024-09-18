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

const myage = document.getElementById("myage");
const submit = document.getElementById("submit");
const resultElement = document.getElementById("resultElement");
let age = 0;

submit.onclick = function{
  if (age >= 18){
  console.log("you are old enough to enter this site");
}else if(age < 0){
  console.log("Your age cannot be less than 0");
}
else{
  console.log("you must be 18+ to enter this site");
}
}