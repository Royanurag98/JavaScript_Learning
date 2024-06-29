// 1.1
const user={
    firstName: "Anurag",
    lastName : "Roy",
    email : "akroy98@gmail.com",
    age : 24,
    address : "House Number, Colony, Pincode, State",
    about:function(){
        return `${this.firstName} is ${this.age} Year old`
    },
    is18:function(){
        return this.age>=18;
    }
}
let infoPerson=user.about();
console.log(infoPerson);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Here our task is to create one simple object and some mothed inside it. we can easly create and access.
// //But our task is to create ten thousand object and all object have same properties and method but value may be differnt 
// //in that case we can't create one by one So how can i create multiple object once?
// /* We can solve this problem through function
    
// First create a function and also create a empty object inside it
// Then add the value in empty object 
// and then return the object*/

function personInfo1(firstName,lastName,email,age,address){
   const  personDetails={};
    personDetails.firstName=firstName;
    personDetails.lastName=lastName;
    personDetails.email=email;
    personDetails.age=age;
    personDetails.address=address;
    personDetails.about=function(){
        return `${this.firstName} is ${this.age} Year old`
    };
    personDetails.is18=function(){
        return this.age>=18;
    }
  return personDetails;

}

let user1=personInfo1("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
let user2=personInfo1("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
let user3=personInfo1("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
let user4=personInfo1("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
console.log(user1,"\n");
console.log(user2,"\n");
console.log(user3,"\n");
console.log(user4,"\n");

// ////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Here some problem is exist if i call the function for creating new object 100 time all time both the method are also create in every object
// // and it conuseem some space so we can solve this problem through creating new object and inside the object we create both the method 
// //just we call the object inside the personalInfo function.

const userMethod = {
    about:function(){
        return `${this.firstName} is ${this.age} Year old`
    },
    is18:function(){
        return this.age>=18;
    }

};

function personInfo2(firstName,lastName,email,age,address){
    const  personDetails={};
     personDetails.firstName=firstName;
     personDetails.lastName=lastName;
     personDetails.email=email;
     personDetails.age=age;
     personDetails.address=address;
     //There is also a problem if i create 100 method inside userMethod in that case we have to add the refrence of that function in main object 
     personDetails.about = userMethod.about;//it is a address of that function.
     personDetails.is18 = userMethod.is18;
   return personDetails;
 
 }


 let user5=personInfo2("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user6=personInfo2("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user7=personInfo2("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user8=personInfo2("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 console.log(user5,"\n");
 console.log(user6,"\n");
 console.log(user7,"\n");
 console.log(user8,"\n");
 console.log(user5.about());

//////////////////////////////////////////////////////////////////////////////////////////
// solve this problem by using object.create()
 const userMethod1 = {
    about:function(){
        return `${this.firstName} is ${this.age} Year old`
    },
    is18:function(){
        return this.age>=18;
    }

};

function personInfo3(firstName,lastName,email,age,address){
    const  personDetails=Object.create(userMethod1);
     personDetails.firstName=firstName;
     personDetails.lastName=lastName;
     personDetails.email=email;
     personDetails.age=age;
     personDetails.address=address;
    
     return personDetails;
 
 }


 let user9=personInfo3("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user10=personInfo3("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user11=personInfo3("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user12=personInfo3("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 console.log(user9,"\n");
 console.log(user10,"\n");
 console.log(user11,"\n");
 console.log(user12,"\n");


 ////////////////////////////////////////////////////////
 // in previous way we create a function and lso create a object which contain the method the we convert in proto of that object
 // we can directly add all the method in function with the help of prototype
//  const userMethod1 = {
//     about:function(){
//         return `${this.firstName} is ${this.age} Year old`
//     },
//     is18:function(){
//         return this.age>=18;
//     }

// };

function personInfo4(firstName,lastName,email,age,address){
    const  personDetails=Object.create(personInfo4.prototype);
     personDetails.firstName=firstName;
     personDetails.lastName=lastName;
     personDetails.email=email;
     personDetails.age=age;
     personDetails.address=address;
    
     return personDetails;
 
 }
 // add both the method in prototype of function
 personInfo4.prototype.about=function(){
    return `${this.firstName} is ${this.age} Year old`

 }
 personInfo4.prototype.is18=()=>{
    return this.age>=18;
 }


 let user13=personInfo4("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user14=personInfo4("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user15=personInfo4("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 let user16=personInfo4("Anurag","Roy","Akr98@gmail.com",22, "Bhagalpur , Bihar, India");
 console.log(user13,"\n");
 console.log(user14,"\n");
 console.log(user15,"\n");
 console.log(user16,"\n");
 console.log(user13.about());


 

 // there is another way to create empty object

 const obj1={
    Key1:"Value1",
    key2:"Value2"
 } 
 // if i create empty object in this way in that case if any value is not exist in obj2 then find the value in obj1
 const obj2=Object.create(obj1); // it create the proto for obj2 . and obj1 is proto for obj2
 obj2.Key3="Value3"
 console.log(obj2.__proto__);// if you want to check the proto of obj2 We have to console.log(obj2.__proto__);
 console.log(obj2.Key1);// first serch Key1 in obj2 if key1 is not exist in obj2 then it serch in obj1 and return value of key one
 

//  ///////////////////////////////////////////////////////////////////////////////////////
// prototype is a object
//prot is a reference of that object


