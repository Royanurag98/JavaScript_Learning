//  JavaScript Methods and this Keyword

//JAVASCRIPT MEETHOD
//In JavaScript, objects can also contain functions. this function is called meethod
//Basically, the JavaScript method is an object property that has a function value.

// 1 Way to create method
// Person is an object ,Name  and Age are the object properties and greet is the object method.

const person = {
    Name: 'Anurag',
    Age:   24,
    greet: ()=> { 
        console.log('hello'); 
    }
};

// Adding a property
person.State = 'Bihar';

// Accessing property
person.Name; // Anurag
console.log(person.Name);

// Adding a method
person.sum=(b,c)=> {  
    console.log(`Sum of two number is ${b+c}`);
}
// Accessing method
person.greet(); // hello
person.sum(4,7);
console.log(person);

// 2 Way create a empty object and add properties and meethods
let studentInfo={ };

// Add object properties
studentInfo.Name ="Anurag";
studentInfo.Age = 24;

// Add object method
studentInfo.greet1=()=>{
    console.log("This method is part of Student object");
}
studentInfo.sumNum1=(x,y)=>{
    console.log(`Sum of two number is ${x+y}`);
}

// Accessing method
console.log(studentInfo);
studentInfo.greet1();
studentInfo.sumNum1(4,5);

