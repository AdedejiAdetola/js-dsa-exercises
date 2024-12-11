// leet  cookleetcode dbutsadandsad sad
const haystack = "dbutsadandsan";
const needle = "adan";

//the first is to check if the needle exists in the haystack
//write for loop to determine if or where the index of the first letter to check is
count = 1;
let currIndex;
let arr = [];
let firstIndexTracker;

for (i = 0; i < haystack.length; i++) {
  //check the first letter of needle if it exists in haystack
  if (needle[0] === haystack[i]) {
    console.log(needle[0], i, "initialis");
    currIndex = i; //note next index must not be greater than haystack-1
    arr.push(i);
  }
  //if yes, check if the next letter exists and its index is greater than the current index in the haystack by 1
  if (
    currIndex + 1 < haystack.length &&
    count < needle.length &&
    needle[count] === haystack[currIndex + 1]
  ) {
    console.log(haystack[currIndex + 1], currIndex + 1);
    currIndex += 1; //sets current index from 4 to 5
    count += 1;
    // i += 1;
  }

  // else if (needle.length - 1 === haystack[currIndex + 1]) {
  //   console.log("done");
  // } else if (needle[count] !== haystack[currIndex + 1]) {
  //   //if the letter does not exist or its index is not greater than the current index
  //   count = 1;
  //   // i = needle[0];
  //   console.log("arr", arr, i);

  //   // console.log(i, "l");
  //   // console.log("cc", currIndex);
  // }
}
