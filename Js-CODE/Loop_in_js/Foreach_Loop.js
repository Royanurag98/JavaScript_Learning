//forEach() Method
//The forEach() method calls a function for each element in an array.The forEach() method is not executed for empty elements.
let arr=[10,20,30,40];
arr.forEach(function(val,index){
    console.log(index, "==>", val);

})
// I want to add 100 in each element of array
let arr1=[10,20,30,40];
arr1.forEach((val,index)=>{
    console.log(index, "==>", arr1[index]+100);
 
    
})

// Implement custom forEach
let arr2=[3,4,5,6,7];
Array.prototype.customForEach=function(callback){
for(let i=0; i<this.length;i++){
    callback(this[i],i,this)
}
}

let array=[
    {Name:"Anurag", Age:22, State:"Bihar"},
    {Name:"Raman", Age:24, State:"Bihar"},
    {Name:"Aman", Age:23, State:"Bihar"},
]

array.forEach((User,index)=>{
    console.log(User.Name);
})