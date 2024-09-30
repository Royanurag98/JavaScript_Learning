// Find the count of repeated latter from the word which is equal to I
// missIssIppi  output I


// Method -1 ///////////////////////////////
let str='mississdippi'
let count=0
for(let char of str)
    if(char=='I' || char=='i')
        count++
console.log(count);

// Method -2/////////////////////////////////////////
let arr=str.split('')
const I_Count=arr.reduce((iniVal, curVal)=> curVal=="I"|| curVal=='i'?iniVal+1:iniVal, 0)
console.log(I_Count);







