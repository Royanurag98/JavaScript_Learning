// arr.sort();//SORT ARRAY ELEMENT IN ALPHABATIC ORDER if array element are string.

// Sort method work on Ascii value

//Case 1 : If all string start with different alphabate
let arr=["Mango","Banana","Lichi","Papaya"];
console.log(`Original Array items      : ${arr}`);
console.log(`After sort Array items    : ${arr.sort()}\n\n`);

//Case 2 : If all string start with same alphabate
const arr1=["Aman","Anurag", "Ankit"];
console.log(`Original Array items      : ${arr1}`);
console.log(`After sort Array items    : ${arr1.sort()}\n\n`);


//Case 3 : If all string start with same alphabate
//(A) Intense (B) Intellect (C) Intend (D) Intelligent (E) Integument 
const arr2=["Intense", "Intellect", "Intend", "Intelligent", "Integument"];
console.log(`Original Array items      : ${arr2}`);
console.log(`After sort Array items    : ${arr2.sort()}\n\n`);

//Case 4 : If all string start with same alphabate
const arr5=["Anurag","anurag", "Ankit","ankit","Ram","ram"]// Return  Ankit,Anurag,Ram,ankit,anurag,ram
console.log(`Original Array items      : ${arr5}`);
console.log(`After sort Array items    : ${arr5.sort()}\n\n`);


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


//Question => 5, 9, 1200, 400, 3000
//Expected => 5, 9, 400, 1200, 3000 but return 1200,3000,400,5,9 why?

// JavaScript short the array element as a string so "5", "9", "1200", "400", "3000" => 1200,3000,400,5,9 
const arr3= [5,9,1200,400, 3000];                   // 5=>53,9=>57,1=49,4=>52,3=>51  ===> return 1200,3000,400,5,9                                 
console.log(`Original Array items      : ${arr3}`);
console.log(`After sort Array items    : ${arr3.sort()}\n\n`);

const arr4=[10,30,20,50,25,35];
console.log(`Original Array items      : ${arr4}`);
console.log(`After sort Array items    : ${arr4.sort()}\n\n`);

// Another way to sort number
let arr6=[5,9,1200,400, 3000];
let AccendingShort=arr6.sort((a,b)=>{
      return a-b;
})
console.log("Sort an array elements in Accedenging Order :",AccendingShort);
let arr7=[5,9,1200,400, 3000];
let DecendingShort=arr7.sort((a,b)=>{
      return b-a;
})
console.log("Sort an array elements in Decending Order :",DecendingShort);


// 
let arr8=[
        {itemOne:"Laptop" , productId:1, itemPrice:20000 },
        {itemOne:"Laptop" , productId:2, itemPrice:12000},
        {itemOne:"Laptop" , productId:3, itemPrice:15000},
        {itemOne:"Laptop" , productId:4, itemPrice:10000}
  ]
   // Price Low To High
   
  let  Low_To_High=arr8.slice(0).sort((a,b)=>{
          return a.itemPrice -b.itemPrice;
  })
  console.log(Low_To_High);

 // Price High To Low
  let  High_To_Low=arr8.slice(0).sort((a,b)=>{
    return b.itemPrice -a.itemPrice;
})
console.log(High_To_Low);
