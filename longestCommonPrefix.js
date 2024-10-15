//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""

strs = ["flower", "flow", "flight"];
strs_length = [];

//Pseudocode Solution

//get length of all strings
for (var i = 0; i < strs.length; i++) {
  strs_length.push(strs[i].length);
}

//check for the smallest string length - dunno if this is necessary
limit = Math.min(...strs_length);

// console.log(limit);

//here the loop for each strings will only stop at the smallest
for (var i = 0; i < strs.length; i++) {
  console.log(i);
  //compare strs[1][0] == strs[2][0] == strs[3][0]
  //create an array of all elements but with the smallest length now [flow, flow, flig]
  //compare the last items if they don't match, pop and compare the next last element, pop and compare the last elements
}
//the elements of each string must be at the same index concurrently
