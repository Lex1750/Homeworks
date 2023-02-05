const arrLength = prompt("Enter the length of the array");
const arrElements = [];

for (let i = 0; i < arrLength; i++) {
  arrElements.push(prompt("Enter element " + (i + 1)));
}

arrElements.sort((a , b) => a - b);
document.write("Sorted Array: " + arrElements + "<br>");

arrElements.splice(1,3);
document.write("Array after removing elements from 2 to 4: " + arrElements);
