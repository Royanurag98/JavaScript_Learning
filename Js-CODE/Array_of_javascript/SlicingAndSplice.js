  
// Slice() : it is used to get array elements

  let arr=[20,30,40,50,60]
   console.log(arr.slice(1,3),"<br>");   //  Rturn 1 to 2
   console.log(arr.slice(2),"<br>");     //  Return All the elemeny after three.
   console.log(arr.slice(-2),"<br>");    //  Return All the elemeny after -2.
   console.log(arr.slice(-4,-1),"<br>"); //  Return All the elemeny after -2.

// Splice(): use to delete Add and Replace the array elements

    let arr2=["Anurag","Priti","Kivata","Ravi"];
    arr2.splice(1,2);// Delete the array element 1 to 2.
    console.log(arr2,"<br>");
    // Add element
    let arr3=["Anurag","Priti","Kivata","Ravi"];
    arr3.splice(1,0,"saroj");// Add element place of index 1  and shift forword of index one
    console.log(arr3,"<br>");
    //Replace 
    let arr4=["Anurag","Priti","Kivata","Ravi"];
    arr4.splice(2,1,"Kunal");// Delet element of index two and add element in place of index two
    console.log(arr4,"<br>");
 