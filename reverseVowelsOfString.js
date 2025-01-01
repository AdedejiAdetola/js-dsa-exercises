const s = "IceCreAm";
let s_array = s.split("");
//output = "AceCreIm"
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const isVowel = new Set(vowel);
let left = 0,
  right = s_array.length - 1;

while (left < right) {
  //if it is consonant for left pointer, increment
  if (!isVowel.has(s_array[left])) {
    left++;
  }
  //if it is consonant for right pointer, decrement
  if (!isVowel.has(s_array[right])) {
    right--;
  }

  //if true, swap both pointers and increment pointer
  if (isVowel.has(s_array[left]) && isVowel.has(s_array[right])) {
    [s_array[left], s_array[right]] = [s_array[right], s_array[left]];
    left++;
    right--;
  }
}

console.log(s_array.join(""));
