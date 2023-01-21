// ask for operation
const operation = prompt("What do you want to do? (add, sub, mult, div)");

// ask for first number
const num1 = prompt("Enter first number:");

// ask for second number
const num2 = prompt("Enter second number:");

// perform operation
let result = "";
if (operation === "add") {
    result = num1 + " + " + num2 + " = " + (+num1 + +num2);
} else if (operation === "sub") {
    result = num1 + " - " + num2 + " = " + (num1 - num2);
} else if (operation === "mult") {
    result = num1 + " * " + num2 + " = " + (num1 * num2);
} else if (operation === "div") {
    result = num1 + " / " + num2 + " = " + (num1 / num2);
} else {
    result = "Invalid operation";
}
// show result
alert(result);

