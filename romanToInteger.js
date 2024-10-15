let roman_dict = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let double_roman_dict = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

let valuesArray = [];

//lets try for normal numbers
//if larger number comes first then we add, - XVII = 10+5+1+1
//if smaller number comes first, we subtract - CMIX = 100 +1000 + 1 + 10 | 1000, 100, 10, 1

//GIVEN A STRING S
s = "CMXII";

for (var i = 0; i < s.length; i++) {
  //get a double letter variable
  let doubleLetter = s[i] + (s[i + 1] || "");
  //   console.log(doubleLetter);

  if (double_roman_dict[doubleLetter] !== undefined) {
    valuesArray.push(double_roman_dict[doubleLetter]);
    i++;
  } else if (roman_dict[s[i]] !== undefined) {
    valuesArray.push(roman_dict[s[i]]);
  }
  //   console.log(valuesArray);
}

let sum = valuesArray.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
