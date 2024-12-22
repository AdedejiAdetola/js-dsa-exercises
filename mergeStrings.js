const word1 = "abcdewe";
const word2 = "fghidaflsf";
let merged = "";

//check the longest word of the two words
const longerWord = word1.length > word2.length ? word1.length : word2.length;
console.log(longerWord);
//create a loop with the longest
for (let i = 0; i < longerWord; i++) {
  //check if word1's index is shorter than word1.length and append
  if (i < word1.length) {
    merged += word1[i];
  }
  //check if word2's index is shorter than word2.length and append
  if (i < word2.length) {
    merged += word2[i];
  }
}
return merged;
