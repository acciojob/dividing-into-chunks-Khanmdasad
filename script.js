const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num > n) {
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    } else {
      currentSubarray.push(num);
      currentSum += num;
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example usage:
const arr1 = [1, 2, 3, 4, 1, 0, 2, 2];
const n1 = 5;
console.log(JSON.stringify(divide(arr1, n1))); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

const arr2 = [4, 3, 2, 1];
const n2 = 4;
console.log(JSON.stringify(divide(arr2, n2))); // Output: [[4], [3], [2], [1]]

// Prompt user for input (Uncomment if running in an environment
