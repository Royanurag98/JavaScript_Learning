// FIND THE AVARAGE NUMBER WHICH IS GIVEN BY USER
// let arr=[5,10,2,8]

let arr=[5,10,2,8]
temp=0
for(let x of arr){
    temp +=x
}
console.log(temp/arr.length);

const Avarge=arr.reduce((iniVal, curVal)=> iniVal+curVal,0)
console.log(Avarge/arr.length);

