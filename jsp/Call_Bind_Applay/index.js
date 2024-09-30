
// we know that this keyword is use to self referencing
let Assocries1={
    productName  :"Laptop",
    productId    :10009973,
    Price        : 50000 ,
    productInfo: function(){
        // here this keyword point to the object
        console.log(this.productName, this.Price, this.productId);
        
    }   
}
Assocries1.productInfo()

// suppose we create two object and i want to access  the value of second object through the first object function 
// so we use call
let Assocries2={
    productName  :"Mobile",
    productId    :10009973,
    Price        : 50000 , 
      productInfo: function(){
        // here this keyword point to the object
        console.log(this.productName, this.Price, this.productId);
        
    }    
    } 
    
Assocries1.productInfo.call(Assocries2)

// suppose we create two object and i want to access  the value of both the object through
// the function which is create in outside this function is not dependend of any object
// so we use call

let personalDetail=function(){
    console.log(this)
 }

let StudentInfo1={
    Name:"Anurag Kumar",
    Roll:57,
    Designation: "Full Stack Developer"
}


 personalDetail.call(StudentInfo1)

let StudentInfo2={
    Name:"Anurag Kumar",
    Roll:57,
    Designation: "Full Stack Developer"
}
personalDetail.call(StudentInfo2)





