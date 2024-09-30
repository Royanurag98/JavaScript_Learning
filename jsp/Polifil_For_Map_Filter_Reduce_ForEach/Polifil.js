
Array.prototype.myMap=function(cb){
   let temp=[]
   for(let i=0; i<this.length; i++){
    temp.push(cb(this[i], i, this))
   }
   return temp
}

let arr2=[2,3,4,5,6]
let newArr=arr2.myMap((curEle, i, arr)=>{
   return curEle*2
})

console.log(newArr)


Array.prototype.myFilter=function(callback){
    let array=[]
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i. this)) array.push(this[i])
    }
   return array
}

let arr=[2,3,5,6,8,9,4,5]
let res=arr.myFilter((curElem)=>{
   return curElem >4
}) 

console.log(res)