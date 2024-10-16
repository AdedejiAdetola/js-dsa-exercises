s = "A man, a plan, a canal: Panama";
sAlpha = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// console.log(sAlpha);

let sReverse = "";
for (let i = sAlpha.length - 1; i >= 0; i--) {
  sReverse += sAlpha[i];
}

if (sAlpha === sReverse) {
  console.log(true);
} else {
  console.log(false);
}
