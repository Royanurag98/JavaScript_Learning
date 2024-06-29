// SPREAD OPERATOR IN JS

// SPREAD OPERATOR : IT USED TO UNPACKS THE ELEMENTS AND THE UNPACKS ELEMENTS CAN BE ARRAY OR OBJECT


                                   // USE OF SPREAD OPERATOR WITH ARRAY

let arr=[20,30,40,50,60];
console.log(...arr); // Unpack the array like 20 30 40 50 60


// 1. WE CAN COPY THE  array or object ELEMENT OR CLONING 


let arr1=[3,4,6,8];
// Spread operator make a copy of arr1 and assign in arr2 and it also take a seprate space in memory so if i update somthing in arr1 later. in that case arr2 has no effect.
let arr2=[...arr1]; // Unpack the array then assign in array
console.log("Original Array  :", arr1);
console.log("Duplicate Array :",arr2);
arr1.push(10,20);
console.log("Original Array  :", arr1);
console.log("Duplicate Array :",arr2);

// 2. WE CAN MERGE TWO ARRAYS.

let oldArray=[2,3,4,5];
let newArray=[6,7,8,9];
// First copy both the array and the marge .
let margeArray=[...oldArray,...newArray];
console.log("oldArray :",oldArray );
console.log("newArray :",newArray);
console.log("newArray :",margeArray);

// WE CAN ALSO COMPOSE 
 
let oldArray1=[2,3,4,5];
let newArray1=[6,7,8,9];
// First copy both the array and the marge .
let margeArray1=[100,...oldArray1,...newArray1,200];
console.log("oldArray :",oldArray1);
console.log("newArray :",newArray1);
console.log("newArray :",margeArray1);


                                         // USE OF SPREAD OPERATOR WITH STRING

let str1="Anurak";
console.log("Name :", str1);
// We can convert string to array with the help of spread operator and perform some task with any character.
let Spread=[...str1];
console.log("After Sperading the string :" ,Spread);

                                           // USE OF SPREAD OPERATOR WITH Object
 
// 1. WE CAN COPY THE OBJECT OR CLONING 
let obj={
       "Name":"ANurag Kumar",
       "Roll":57,
       "Reg":12213393
};
console.log(obj);

let copyObj={
    ...obj,
};
console.log(copyObj);


// Sprade operator make the sello copy(Means if any nasted object (like array) exist in obj1 . 
//spread operator cant copy that object it copy only the reference of that object in that case 
//if you upade nested object of old object your copy object also update because nasted object contain same address.
 
//object like)
let obj1={
    Name:"ANurag Kumar",
    Roll:57,
    Reg:12213393,
    arr4:[3,4,5,6,7],
};
console.log( "Old obj ",obj1);

let copyObj1={
 ...obj1,
};

// check proper copy of obj or not
obj1.arr4.push(9,10);
console.log("Copy Object",copyObj1);

// 2. WE CAN MERGE TWO OBJECT. // WE CAN ALSO COMPOSE 
const obj2={
         Name:"Anurag ROy",
         Work:"Study",
         Class:"MCA",

}

const obj3={
       Roll:57,
       Reg:1213393,

}

const murgeTowObj={
    ...obj2, ...obj3,
}
console.log("After Marging Two Object :",murgeTowObj);

