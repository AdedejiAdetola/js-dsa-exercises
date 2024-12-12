// leet  cookleetcode dbutsadandsad sad
const haystack = "dbutsadaxndsad";
const needle = "adan";

//set start index  and count for the needle
let startIndex = -1;
let count = 0;

//loop through the haystack
for (let i = 0; i < haystack.length; i++) {
  //if there is a match
  if (haystack[i] == needle[count]) {
    //set start index to the value of i when count is 0
    if (count === 0) startIndex = i;

    //dont forget to increment count
    count++;

    //and the loop is complete, we want to return the start index
    if (count === needle.length) return startIndex;
  }
  //if there is a mismatch
  else {
    //and there was a match for a while, we want to reset the count to 0
    //we also want i to Restart the loop from the next character after startIndex
    //how do we check if there was a match for a while? we know, because the count will have been incremented
    //we should also reset the startIndex to -1

    if (count > 0) {
      i = startIndex;
      count = 0;
      startIndex = -1;
    }
  }
}

if (count !== needle.length) {
  return -1;
}
