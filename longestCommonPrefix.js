function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; // Edge case: empty array

  // Find the smallest string length
  let limit = Math.min(...strs.map((str) => str.length));

  let result = [];

  // Loop over each character index up to the limit (smallest string length)
  for (let count = 0; count < limit; count++) {
    // Get the character from the first string
    let char = strs[0][count];

    // Compare this character with the same index in other strings
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][count] !== char) {
        // Return the result as soon as a mismatch is found
        return result.join("");
      }
    }

    // If all strings have the same character at this index, add it to the result
    result.push(char);
  }

  // Return the full common prefix (if loop finishes without finding mismatches)
  return result.join("");
}

// Test case 1
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

// Test case 2
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
