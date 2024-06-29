/// Chaning of map reduce filter..
let array=[10,21,30,41,50,61];
const Result=array
       .map((Val)=> Val+10)
       .map((Val)=>Val+1)
       .filter((Val)=>Val%2===0)

console.log(Result)

// We can use multiple method at once ..

let arr=[
      {itemOne:"Mobile" , productId:1, itemPrice:12000 },
      {itemOne:"Laptop" , productId:2, itemPrice:20000},
      {itemOne:"Tv" , productId:3, itemPrice:15000},
      {itemOne:"Car" , productId:14, itemPrice:1000000}
]
    
const TotalPrice=arr.reduce((accumulator, Price)=>{
         return accumulator + Price.itemPrice;
},0)
console.log( "Total Price of all Assocries is : ",TotalPrice);