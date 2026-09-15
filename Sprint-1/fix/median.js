// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  // Check that the input is an array
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  // Check that the array is not empty
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

  // Check that every item is a number
  if (!list.every((item) => typeof item === "number" && !isNaN(item))) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  // Make a copy so we don't modify the original array
  const sortedList = [...list];

  // Sort numbers from smallest to largest
  sortedList.sort((a, b) => a - b);

  // Find the middle index
  const middleIndex = Math.floor(sortedList.length / 2);

  // Odd number of elements
  if (sortedList.length % 2 === 1) {
    return sortedList[middleIndex];
  }

  // Even number of elements
  return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
}

module.exports = calculateMedian;

// function calculateMedian(list) {
//   if (list.length === 0) return null;
//   list = list.filter((item) => typeof item === "number" && !isNaN(item));
//   list.sort((a, b) => a - b);
//   const middleIndex = Math.floor(list.length / 2);
//   if (list.length % 2 === 1) {
//     return list[middleIndex]; //odd number if elements
//   }

//   return (list[middleIndex - 1] + list[middleIndex]) / 2;
// }

// module.exports = calculateMedian;
