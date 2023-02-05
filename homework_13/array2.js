const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveElements = 0, negativeElements = 0, oddPositiveElements = 0, evenPositiveElements = 0;
let sumPositive = 0, sumOddPositive = 0, sumEvenPositive = 0, productPositive = 1;
let minElement = arr[0], minIndex = 0, maxElement = arr[0], maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveElements++;
        sumPositive += arr[i];
        if (arr[i] % 2 === 0) {
            evenPositiveElements++;
            sumEvenPositive += arr[i];
        } else {
            oddPositiveElements++;
            sumOddPositive += arr[i];
            productPositive *= arr[i];
        }
    } else {
        negativeElements++;
    }
    if (arr[i] < minElement) {
        minElement = arr[i];
        minIndex = i;
    }
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxIndex = i;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}
console.log("Number of positive elements:", positiveElements);
console.log("Sum of positive elements:", sumPositive);
console.log("Number of negative elements:", negativeElements);
console.log("Minimum element:", minElement, "at index", minIndex);
console.log("Maximum element:", maxElement, "at index", maxIndex);
console.log("Number of odd positive elements:", oddPositiveElements);
console.log("Number of even positive elements:", evenPositiveElements);
console.log("Sum of even positive elements:", sumEvenPositive);
console.log("Sum of odd positive elements:", sumOddPositive);
console.log("Product of positive elements:", productPositive);
console.log("Array with largest element:", arr);
