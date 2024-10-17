let s = "anagram";
let t = "nagaram";

//check length of both strings
if (s.length === t.length) {
  //   console.log(true);

  //create dictionary from s
  s_dict = { [s[0]]: 1 };

  //   console.log(s_dict);
  for (i = 1; i < s.length; i++) {
    if (!(s[i] in s_dict)) {
      s_dict[s[i]] = 1;
    } else if (s[i] in s_dict) {
      s_dict[s[i]] += 1;
    }
  }

  //use t to confirm if occurences of character in s matches with t

  for (j = 0; j < t.length; j++) {
    if (t[j] in s_dict) {
      s_dict[t[j]] -= 1;
      if (s_dict[t[j]] < 0) {
        console.log(false);
      }
    } else {
      console.log(false);
    }
  }

  let isAnagram = true;
  for (let key in s_dict) {
    if (s_dict[key] !== 0) {
      isAnagram = false;
      break;
    }
  }

  console.log(isAnagram);
} else {
  console.log(false);
}
