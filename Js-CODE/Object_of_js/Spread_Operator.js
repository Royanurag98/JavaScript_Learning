// SPREAD OPERATOR WITH OBJECT
let obj1={
       Name:"Anurag",
       Roll:56,
       Reg:122133,
// if i add Same key again in that case Last key over lap the previous key.
       Name:"Raman"
}
let obj2={
       State:"Bihar",
       City:"Bhagalpur",
       Village:"Marwa",
       Name:"Rahul"
}
const New_Obj={
    ...obj2,
    ...obj1,
 
    key:"hello",
}
console.log(New_Obj);

// We can also convert string and Array item into a object.

let New_object={..."abc"}; // this string arrange in key value pairs { '0': 'a', '1': 'b', '2': 'c' }
console.log(New_object);

let Arr_Obj={ ...["Anurag", "Rahul", "Vivak"]};
console.log(Arr_Obj);