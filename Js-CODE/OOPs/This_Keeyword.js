//JavaScript this Keyword
//To access a property of an object from within a method of the same object, you need to use the this keyword.
//Means if you want to access the property of that object within the object method we need to use this keyword
//Basically  When we use this keyword inside the object method. this keyword point the same object.
//////////////////////////////////////////////////////
const person = {
    Name: 'Anurag Kumar',
    Age: 30,

    // accessing name property by using this.name
    greet: function() { 
        console.log('The name is' + ' ' + this.Name); 
    }
};
person.greet();


////////////////////////////////////////////////

function  AssocriesDetails(){
    console.log(` Product Details =>\n \tProduct Name : ${this.productName}\n\tProduct Id : ${this.productId}\n\t Price : ${this.Price} ` )
};
let Assocries1={
     productName  :"Phone",
     productId    :10009972,
     Price        : 10000 ,
     productInfo: AssocriesDetails // set the value of that function
}
let Assocries2={
    productName  :"Laptop",
    productId    :10009973,
    Price        : 50000 ,
    productInfo: AssocriesDetails   
}
let Assocries3={
    productName  :"Telivision",
    productId    :10009974,
    Price        : 12000,
    productInfo: AssocriesDetails  
}

Assocries2.productInfo();


////////////////////////////////////////////////
// if console this it print the window object (Window object is global object of js)
console.log(this);
console.log(window); // it also return a window object

/////////////////////////////////////////////////
// Note arrow function 
