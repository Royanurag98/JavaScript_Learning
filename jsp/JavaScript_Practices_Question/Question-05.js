// Short the given array in accending and decending 
// arr=[5,3,1,8]

//We can not short number using sort method because sort method sort the value based on ASSCI code
// Accending Sort /////////////////////////////////////////////////
arr3=[5,900,1,8]
console.log(arr3.sort((a,b)=>a-b
))

// Decending Sort /////////////////////////////////////////////////

arr2=[5,3,1,8]
console.log(arr2.sort((a,b)=>b-a))


// But We can short string or array using sort method because sort method sort the value based on ASSCI code

let str="Apple"
let arr2=str.split('')
console.log(arr2.sort());



//###################################################################################################

// BUT SORTING METHOD WORK IN DIFFERENT WAY ON NUMBER
// Work on Asscii value
// "0" => 48
// "1" => 49
// "2" => 50
// "3" => 51
// "4" => 52
// "5" => 53
// "6" => 54
// "7" => 55
// "8" => 56
// "9" => 57


//Question => 5, 9, 1200, 400, 3000 output =>5, 9, 400, 1200, 3000 
//Expected => 5, 9, 400, 1200, 3000 but return 1200,3000,400,5,9 why?

// JavaScript short the array element as a string so "5", "9", "1200", "400", "3000" => 1200,3000,400,5,9 
const arr3= [5,9,1200,400, 3000];                   // 5=>53,9=>57,1=49,4=>52,3=>51  ===> return 1200,3000,400,5,9                                 
console.log(`Original Array items      : ${arr3}`);
console.log(`After sort Array items    : ${arr3.sort()}\n\n`);
