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

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLebel = document.getElementById("countLebel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLebel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLebel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLebel.textContent = count;
}