// Find the Count of repeted latter from the given string
let str = "mississdippi";
let arr2 = [];
let cashe = "";
for (let c of str) {
  let count1 = 0;
  for (let i = 0; i <= str.length; i++) {
    if (c == str[i]) count1 = count1 + 1;
  }
  if (count1 > 1 && !cashe.includes(c)) {
    arr2.push(count1);
    cashe = cashe + c;
  }
}
console.log(cashe);
console.log(arr2);
