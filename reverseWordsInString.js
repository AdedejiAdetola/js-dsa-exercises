const s = "  the sky is    blue  ";
let cleanWord = s.trim().replace(/\s+/g, " ");
let word_array = cleanWord.split(" ");
console.log("w", word_array);

let left = 0,
  right = word_array.length - 1;

while (left < right) {
  [word_array[left], word_array[right]] = [word_array[right], word_array[left]];
  left++;
  right--;
}

console.log(word_array.join(" "));
