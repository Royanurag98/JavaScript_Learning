// Check given input is palidrom or not . input may be number or string
// racecar
// 131

// METHOD 1 ///////////////////////////////////////
let num="131"
let num2=''
for(let i=num.length-1; i>=0; i--){
     num2+=num[i]
}
if(num=== num2) console.log("Given number is palidrom");
else console.log("Given number is not palidrom");


// METHOD 2 ////////////////////////////////////////////
let str='racecar'
let msg=''
for(let x of num){
   for(let i=num.length-1; i>=0; i--){
    if(x==num[i])
          msg="palindrom"
    else  msg="Not palindrom"
}
}
console.log("Given string is ",msg);


// METHOD 3 ////////////////////////////////////////////
let str2='racecar'
let arr=str2.split('')
const palidrom=arr.reduce((iniVal, curVal,i, arr)=>( iniVal && (curVal===arr[arr.length-i-1])) )
console.log(palidrom);


// METHOD 4 ////////////////////////////////////////////
let str3='racecaz'
let str5=str3.split('').reverse().join('')
if(str3===str5)console.log("yes");
else console.log("no");







