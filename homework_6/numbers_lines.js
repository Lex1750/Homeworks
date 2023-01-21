// get three lines from user
const line1 = prompt("Enter first line:");
const line2 = prompt("Enter second line:");
const line3 = prompt("Enter third line:");

//  show lines in any order
const result = line3 + " " + line1 + " " + line2;
alert(result);

// split a five-digit number and show in original order
const num = prompt("Enter a five-digit number:");
const numBrr = num.split("");
alert(numBrr[4] + " " + numBrr[3] + " " + numBrr[2] + " " + numBrr[1] + " " + numBrr[0]);
