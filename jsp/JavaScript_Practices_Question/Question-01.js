// Q Find the longest Word from given string as well as lenght of that word
// str="watch thapa Technical javascript courses on youtube"

let str="watch thapa Technical javascript courses on youtube"
let arr=str.split(' ')

// THROUGH FOR OF LOOP METHOD GET LARGEST LENGTH OF WORD FROM GIVEN STRING AND ALSO GET THAT WORD////////////////////////////////////////////////
let count=0
let LagesWord=''
for(let word of arr){
    if(count< word.length){
        count=word.length
        LagesWord=word
    }   
}
console.log(count, LagesWord );


// THROUGH MAP() METHOD GET LARGEST LENGTH OF WORD FROM GIVEN STRING AND ALSO GET THAT WORD////////////////////////////////////////////////
let count2=0
let word=''
arr.map((curVal, index, arr)=>{
    if(count2<curVal.length){
       count2=curVal.length
       word=curVal
    }}) 
console.log(word,count2);


// THROUGH REDUCE() METHOD GET LARGEST LENGTH OF WORD FROM GIVEN STRING AND ALSO GET THAT WORD////////////////////////////////////////////////
let wordCount=arr.reduce((iniVal, curVal)=>curVal.length > iniVal?curVal:'','abc')
console.log(wordCount);

