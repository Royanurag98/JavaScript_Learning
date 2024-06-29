// 1. Crete a variable of type string and try to add a number to it?
let Name ="Anurag";
console.log(Name+30);
console.log(30 +20 +Name);
console.log( Name + 30 +20);

//2. Use typeof operator to find the data type of string in last question?
console.log(typeof(Name+30));
console.log(typeof(30 +20 +Name));
console.log( typeof(Name + 30 +20));

//3. Crete a const object in JavaScript can you changed it to hold a string later?

/* Here a is a reference of these object(name , section, principle) so we can not change the 
reference with a number or string but we can change the any object key value and add any new
 object key*/
const a= {
    //here name, section , principle is key and Anurag , 1, true is value so it is called key value pairs
    name : "Anurag", 
    section: 1,
    principle:true
}
// a="Anurag";//We can not do that
// a=45;
a['friend']="Priti"; // Add a new key value
console.log(a);
a['name']="Kivata";  // Change the exesting key value.
console.log(a);

// 5.Write a js program to create a word – meaning dictionary of 5 words?
const dictionary = {
    Adjure : "Formal exertion on someone to do something",
    Effete : "No longer effective",
    Gofer :"Person who runs errands"
}
// we can access the any dictonery word using thes method.
console.log(dictionary.Adjure);
console.log(dictionary['Gofer']); 

// Change the number into string
let Age=22 +"";
console.log(`Age = ${Age} and typeof Age is ${typeof(Age)}`);



// Change the string into number
let Age2=+"34"; 
console.log(`Age = ${Age2} and typeof Age is ${typeof(Age2)}`);
console.log(Age2);


