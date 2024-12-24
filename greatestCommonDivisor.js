const string1 = "a";
const string2 = "";

//check if string1 + string2 === string2 + string1, if not eliminate

if (
  string1 + string2 === string2 + string1 ||
  string1 === "" ||
  string2 === ""
) {
  console.log("no common divisor");
} else if (string1 + string2 === string2 + string1) {
  //compute the highest common factor between both lengths of strings, (let us assume it is 2)
  //how do we compute the highest common factor?
  //  - get the lengths first
  //  - the highest common factor cannot be greater than the smallest of the two numbers, hence, we need the smallest of the two numbers
  const length1 = string1.length;
  const length2 = string2.length;
  let hcf = null;
  let divisor = "";

  const smallerNumber = length1 > length2 ? length2 : length1;
  //  - hence we start checking for the highest common factor from the smallest of the two numbers till 1
  //  - the highest common factor is the one that divides both without remainder
  for (let i = smallerNumber; i > 0; i--) {
    if (length1 % i === 0 && length2 % i === 0) {
      hcf = i;
      divisor = string1.slice(0, hcf);
      break;
    }
  }

  // console.log(hcf);
  console.log(divisor);

  //now what we do is check if we repeat this value enough times i.e to the length of string1, will it be exactly equal to string1, do the same for string2
  //how do we check?
}
