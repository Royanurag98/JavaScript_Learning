// Q Concatinate all the word from given string and make the first latter is capital
//let str="Anurag roy depak kumar thapa cours on youtube"

let str="Anurag roy depak kumar thapa cours on youtube"
let arr=str.split(' ')

// THROUGH FOR OF LOOP METHOD CONCATINATE ALL THE WORDS FROM THE GIVEN STRING AND ALSO MAKE FIRST CHARACTER OF ALL THE WORD IN UPPERCASE LATTER ////////////////////////////////////////////////
let ModifyStr=''
for(let word of arr)
     ModifyStr += word[0].toUpperCase()+word.slice(1) 
console.log(ModifyStr);

// THROUGH MAP() METHOD CONCATINATE ALL THE WORDS FROM THE GIVEN STRING AND ALSO MAKE FIRST CHARACTER OF ALL THE WORD IN UPPERCASE LATTER////////////////////////////////////////////////
let ModifyStr2=arr.map((ele, index, arr)=>ele[0].toUpperCase()+ele.slice(1))
console.log(ModifyStr2.join(''));

// THROUGH REDUCE() METHOD CONCATINATE ALL THE WORDS FROM THE GIVEN STRING AND ALSO MAKE FIRST CHARACTER OF ALL THE WORD IN UPPERCASE LATTER////////////////////////////////////////////////
let ModifyStr1=arr.reduce((iniVal, curVal)=> iniVal += curVal[0].toUpperCase() + curVal.slice(1),'')
console.log(ModifyStr1);
