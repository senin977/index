// Printing to console
document.write("Hello World<br>");
console.warn("Warning: hyy");
console.error("Error: errrrrrrrror");
console.log("Log: heeee");

// Printing the data types
var a = 12;
console.log(a);

let b = 10;
console.log(b);

const c = 20;
console.log(c);

let name = "ann";
let sal = 20000;
let invalid = false;

// Operators
let num = 2;
num += 8;
console.log(num); // 10

let num1 = 5;
num1 -= 3;
console.log(num1); // 2

let num2 = 5;
num2 *= 4;
console.log(num2); // 20

let x = num2++;
console.log(x); // 20

++x;
console.log(x); // 21

// Boolean
let a1 = true;
let b1 = false;

console.log((a1 != b1) || (2 == 3)); // true
console.log((a1 != b1) && (2 == 3)); // false

// Conditional statements
var i = 5;
if (i < 3) {
    console.log("hello");
} else {
    console.log("i is not less than 3");
}

// Loops
let sum = 0;
for (i = 0; i <= 10; i++) {
    sum += i;
}
console.log("Sum from 0 to 10 is:", sum);

// Objects
let stud = {
    name: "senin",
    age: 21,
    sal: 23000
};
console.log(stud.name);

// Functions
function greet() {
    alert("Welcome to JS");
}
greet();

function add(a, b) {
    return a + b;
}
let result = add(12, 3);
console.log("Addition:", result);

// Arrow function
let diff = (num1, num2) => {
    return num1 - num2;
};
let output = diff(15, 4);
console.log("Difference:", output);

// Arrays
const seasons = ["winter", "summer", "spring"];
console.log(seasons[2]); // spring
console.log(seasons[0]); // winter

for (let i = 0; i < seasons.length; i++) {
    console.log(seasons[i]);
}

// forEach loop
seasons.forEach((item) => console.log(item));

// map function
let number = [10, 5, 4, 2];
let doubleNumber = number.map(item => item * 2);
console.log("Doubled Numbers:", doubleNumber);

// Homework: Calculator function
function calculate(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}
console.log("Calculation result:", calculate(5, 3, "+")); // Output: 8
