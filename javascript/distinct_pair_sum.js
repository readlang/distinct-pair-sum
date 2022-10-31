function distinctPairSum(arr, k) {
  // type your code here

  let hash = {}
  let output = []

  if (arr.length < 2) {
    return []
  }

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i]+arr[i+1]===k && !hash[arr[i]] && !hash[arr[i+1]]) {
      output.push([arr[i], arr[i+1]])
      hash[arr[i]] = "yes"
      
    }
  }

  // console.log(hash)

  return output
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[10, 0]]");
  console.log("=>", distinctPairSum([10, 0], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
