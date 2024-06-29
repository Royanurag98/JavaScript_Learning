 //FUNCTION OR METHOD OF ARRAY
        // arr.sort();//SORT ARRAY ELEMENT IN ALPHABATIC ORDER
        // arr.reverse();// REVERSE THE RRAY ELEMENT
        // arr.pop();// DELETE ELEMENT FROM LAST
        // arr.push("PRITI","ANURAG"); //ADD ELEMENT FROM LAST
        //arr.shift(); //DELETE ELEMENT FROM begning
        // arr.unshift("PRITI","ANURAG");  //ADD ELEMENT FROM begning
        // let a=arr1.concat(arr2);
        // let d=arr1.join("-");
    
//1. arr.sort(); SORT ARRAY ELEMENT IN ALPHABATIC ORDER
    let arr=["Mango","Banana","Lichi","Papaya"];
    console.log(`Original Array items      : ${arr}<br>`);
    console.log(`After sort Array items    : ${arr.sort()}<br><br>`);

//arr.reverse();  REVERSE THE RRAY ELEMENT

let arr2=["Mango","Banana","Lichi", "Papaya"];
    console.log(`Original Array items      : ${arr2}<br>`);
    console.log(`After reverse Array items : ${arr2.reverse()}<br><br>`);

// arr.pop(); DELETE ELEMENT FROM LAST
let arr3=["Mango","Banana","Lichi", "Papaya"];
    console.log(`Original Array items: ${arr3}<br>`);
    console.log(`Delete from last Array items  : ${arr3.pop()}<br><br>`);
    console.log(`After Delete from last Array items  : ${arr3}<br><br>`);

//arr.push() ADD ELEMENT FROM LAST
let arr4=["Mango","Banana","Lichi", "Papaya"];
    console.log(`Original Array items : ${arr4}<br>`);
    arr4.push("Apple");
    console.log(`After Adding from last Array items  : ${arr4}<br><br>`);

//arr.shift(); DELETE ELEMENT FROM begning
let arr5=["Mango","Banana","Lichi", "Papaya"];
    console.log(`Original Array items : ${arr5}<br>`);
    console.log(`Delete from begin Array items  : ${arr5.shift()}<br><br>`);
    console.log(`After Delete from begin Array items  : ${arr5}<br><br>`);

//arr.unshift() ADD ELEMENT FROM BEGINING
let arr6=["Mango","Banana","Lichi", "Papaya"];
    console.log(`Original Array items : ${arr}<br>`);
    arr6.unshift("Watemalen","Graps");
    console.log(`After Adding from begin Array items  : ${arr6}<br><br>`);

// delete arry[index No] // DELETE ARRAY ELEMENT WHICH YOU WANT BUT SPACE IS NOT DELETE
let arr7=["Mango","Banana","Lichi", "Papaya"];
    console.log(`Original Array items          : ${arr7}<br>`);
    delete arr7[2]
    console.log(`After Deleting from any where Array items  : ${arr7}<br><br>`);
    console.log(`After Deleting from any where Array items  : ${delete[1]}<br><br>`);

//concat(); // ADD TWO ARRAY AND STRINGS
 let s1=[1,2,3,4,5];
 let s2=["Anurag","Priti","Kivata"];
 concat= s1.concat(s2);
 console.log(`After Concate Array items  : ${concat}<br><br>`);
 
//join(); // Join two Array elements and string value(uese any symbole)
let s3=[1,2,3,4,5];
 let s4=["Anurag","Priti","Kivata"];
 join= s1.join("-");
 console.log(`After join Array items  : ${join}<br><br>`);
 join2= s2.join("->");
 console.log(`After join Array items  : ${join2}<br><br>`);

 let str="Anurag Roy";
 join3=str.split(" ").join("");// AnuragRoy
 console.log(`After Joining string  items  : ${join3}<br><br>`);

// isArray() // it is used to find given data is type of array or not.
 let arr8=["Mango","Banana","Lichi", "Papaya"];
 let b=20;
 let c="ANurag";
 let d=Array.isArray(b)
 console.log(d,"<br>");
 let e=Array.isArray(arr8)
 console.log(e,"<br>");
