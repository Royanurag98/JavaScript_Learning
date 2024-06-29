// For an given array with marks of student -->[85,97,46,37,76,60] .find the avg marks of entire class?
let StudentMarks=[85,97,46,37,76,60];
let l=StudentMarks.length;
let temp=0;
for(let i=0; i<l; i++){
    temp = temp+StudentMarks[i];   
}
  let Avg= temp/l;
  document.write(`Avrage Marks of Students is : ${Avg}`);

// For an given array with price of 5 item -->[250,645,300,900,50], all the item have 
//an offer 10% OFF on them. Change the array to store final price after discount.
let itemPrice=[250,645,300,900,50];
let temp1;
document.write("New price of All Items : <br> ")
for(let i=0 ; i<itemPrice.length; i++)
{
   temp1= (itemPrice[i] * 10)/100;
  let AfDis=itemPrice[i]-temp1;
   document.write(`Original price of ${i} item is ${itemPrice[i]} After 10% discount then price of item is  ${AfDis} <br> `);
}

// Create an array to store companies --> ["Bloomberg", "Microsoft","Uber","Googel", "IBM","Netflix"]
// Remove the first company from the array
// Remove Uber and add ola in place of Uber
// Add Amazon at the end.

let companyName=["Bloomberg", "Microsoft","Uber","Googel", "IBM","Netflix"];
  document.write("Array Items :",companyName,"<br><br>");
 let x=companyName.splice(0,1);
 document.write(`Remove the first company from the array :${x} <br>`);
 document.write(companyName,"<br><br>");

 let companyName1=["Bloomberg", "Microsoft","Uber","Googel", "IBM","Netflix"];
 let y=companyName1.splice(2,1,"ola");
 document.write(`Remove Uber and add ola in place of Uber :${y} <br>`);
 document.write(companyName1,"<br><br>");

 let companyName2=["Bloomberg", "Microsoft","Uber","Googel", "IBM","Netflix"];
 let z=companyName2.splice(6,0,"Amazon");
 document.write(`Add Amazon at the end. : ${z} <br>`);
 document.write(companyName2,"<br><br>");
