// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).
function calculateMedian(list) {
  // Check that list is an array
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array");
  }

  // Empty array returns null
  if (list.length === 0) {
    return null;
  }

  // Check that every item is a number
  if (!list.every((item) => typeof item === "number" && !isNaN(item))) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  // Sort the numbers from smallest to largest
  list.sort((a, b) => a - b);

  // Find the middle index
  const middleIndex = Math.floor(list.length / 2);

  // Odd number of elements
  if (list.length % 2 === 1) {
    return list[middleIndex];
  }

  // Even number of elements
  return (list[middleIndex - 1] + list[middleIndex]) / 2;
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
