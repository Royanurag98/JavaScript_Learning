// FOR LOOP ARRAY
let arr1=["Mango","Banana", "Apple","Graps"];
for(let i=0;i<arr1.length; i++){
console.log(arr1[i]);
}

// if i want to push all the item of original array in other array
let arr3=["Mango","Banana", "Apple","Graps"];
let arr4=[];
for(let i=0; i<arr3.length;i++){
   arr4.push(arr3[i].toUpperCase());
}
console.log(arr4);

// WHILE LOOP
  let arr5=[30,40,50,60,70];
  let i=0;
  while( i<arr5.length){
    
    console.log(arr5[i]);
       i++;
  }

// FOR OF LOOP IS USED TO GET THE VALUE OF ARRAY.
let array1=[3,4,5,6,7];
for(let value of array1 ){
    console.log(value);
}

// FOR IN LOOP IS USED TO GET THE KEY OF ARRAY.
let array2=[3,4,5,6,7];
for(let key in  array2 ){
    console.log(key);
    console.log(array2[key]);
}



