const input1 = ["h", "e", "l", "l", "o"];

function reverseAString(s) {
  //to reverse a string a string using two pointer
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }

  return s;
}

console.log(reverseAString(input1));
