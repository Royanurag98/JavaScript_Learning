// Call() Funstion

/////////////////////////////////////////////////////////////////

// Suppose we create two object  and we want to access same properties of both the object using this keyword 
// in that case we have to create method for both the object inside it or if i create the method outside of the object
// in that that we have to set the value of that function . for accessing the properties of that object

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

// Assocries2.productInfo();

///////////////////////////////////////////////////////////////////
// Dependend function
let AssocriesOne={
    productName  :"Phone",
    productId    :10009972,
    Price        : 10000 ,
    productInfo: function(Hobbi, ...Skills){
        //Here this keyword point AssocriesOne but i want that, this keyword also point AssocriesTwo in that case we use call() fun.
         console.log(` Product Details =>\n \tProduct Name : ${this.productName}\n\tProduct Id : ${this.productId}\n\t Price : ${this.Price} `);
         console.log(`Personal Info : ${Hobbi} \n ${Skills}`);
    }
}

AssocriesOne.productInfo("Singing", "C", "C++", "JavaScript");//This will print properties of first object

let Assocriestwo={
   productName  :"Laptop",
   productId    :10009973,
   Price        : 50000 
   
}
// Function Borrowing
// AssocriesOne.productInfo.call(Assocriestwo);// Now this point both the object
AssocriesOne.productInfo.call(Assocriestwo,"Singing", "C", "C++", "JavaScript");// We call also pass the argument

////////////////////////////////////////////////////////////////////
// Independend function

function ANimals(State,Country){
      console.log(`Name => ${this.Name} \n Color=>${this.Color}\n Hight=>${this.Hight}`)
      console.log(`State: ${State}\n Country: ${Country}`)
}

let Animals={
     Name     : "Hourse",
     Color    : "Black",
     Hight    : "8.5 Fit"
}

let Birds={
    Name     : "Parrot",
    Color    : "Green",
    Hight  : "8 inch"
}
ANimals.call(Animals, "Delhi", "India");
ANimals.apply(Birds,["Delhi", "India"]);

// Different between Call() And apply()
// We can pass Multiple argument using both the function . but The difference is that the apply() method pass the arguments in the
// form of array and call() pass separated values .

// Different between Call() And bind()
// Bind work just like call We can pass multiple arguments superated by comma but one thing if use call we directly call tha function but 
// in case of bind first we have to store the function in a varible and we use this function latter