//each letter must exist in doubles in front and at the back
//if after exhausting doubles of the letter and letter remains, we can add 1 to the length of letters

let s = "aaaAaaaa";

//convert s to lowercase
// let new_s = s.toLowerCase();

//STEPS
//create a dictionary to store each letter and its values
let dict_s = {};
//create a count variable to be updated
let count = 0;
let isEmpty = true;

// //if string is empty, return count to be 0
// if (!s.length) {
//   console.log(count);
// }

//populate the dictionary
for (let i = 0; i < s.length; i++) {
  if (s[i] in dict_s) {
    dict_s[s[i]] += 1;
  } else {
    dict_s[s[i]] = 1;
  }
}

// console.log(dict_s);

//check each letters in the dictionary
for (key in dict_s) {
  //if each letter's [key] is divisible by 2, then add letter's value to count;
  //else subtract 1 from the letter's value and add to count.
  if (dict_s[key] % 2 == 0) {
    count += dict_s[key];
  } else {
    count += dict_s[key] - 1;
    isEmpty = false;
  }
}

//outside the loop, check if dictionary is empty, if yes add 1 to count else add nothing and return count
if (isEmpty) {
  console.log(count);
} else {
  count += 1;
  console.log(count);
}
