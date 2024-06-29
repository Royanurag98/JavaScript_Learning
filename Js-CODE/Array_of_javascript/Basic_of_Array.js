// Array in js
//Array is a linear collection of similar datatype or dissimiler data type in JavaScript

let arr=[10,20,30,40,50];
    document.write(arr,"<br>");
    // Get the array values
    document.write(arr[4],"<br>");     //Get value through positive indexing
    document.write(arr.at(-3),"<br>"); //Get value through Negative indexing

    // length properties is used to find the lenght of array
    document.write(arr.length,"<br>");
    // Array is not a data type. it is object data type of non primitive.
    document.write(typeof(arr),"<br>");

    // We can also update the array value through index number but we can not update string
    // value because sting is immutable and array is mutaible(We can add, delete, update the array element).
    // in string we use replace method for update string.
     let arr2=["Anurag", 45,56,5.76,'h'];
     document.write(arr2,"<br>");
     arr2[3]="Priti";
     document.write(arr2,"<br>");

    // we can add a new value in array from last without use any predefine function.
    let arr3=[1,2,3,4,5,6];
    document.write(arr3);
    arr[6]=21;  // Insert without using any predefine function
    document.write(arr3);
    arr3.push("Anurag");// Insert using push function.
    document.write(arr3);
