const integers = [1, 2, 3, 4, 5];
minMaxSum(integers);
function minMaxSum(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Calculate the minimum sum by summing the first four elements
    const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
    
    // Calculate the maximum sum by summing the last four elements
    const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

    // Print the minimum and maximum sums
    console.log(minSum, maxSum);
}


