// Find the vowel from given String /////////////////////////////////////////////////////////////
let str='Hello Anurag'
let res=''
for(let char of str){
    if(char=="A" || char=="E" || char=="I" || char=="O" || char=="U"|| char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
       res +=char
}
console.log("1. Way...... ",res);


/////////////////////////////////////////////////////////////////////////////////////////////////
let str1='Good Morning Every one'
let arr=str1.split('')
let vowels=['a','e','i','o','u' ,'A','E','I','O','U']
let res1=''
for(let y of arr){
    for(let z of vowels) if(y===z) res1 +=y
}
console.log("2. Way...... ",res1);

// Using match() method to check for vowels in the string////////////////////////////////////////////
let res2=''
let str2='Good Morning Every one'
let vowels1=/[aeiouAEIOU]/
for(let x of str2) res2 +=  x.match(vowels1) ? x : '';
 console.log("3. Way...... ",res2);


// Using includes() method to check for vowels in the string /////////////////////////////////
let res3=''
let str3='Good Morning Every one'
let vowels2=['a','e','i','o','u' ,'A','E','I','O','U']
for(let x of str3) res3 +=vowels2.includes(x)?x:"" 
 console.log("4. Way...... ",res3);


// Using Reduce method ////////////////////////////////////////////////////////////////////////////
 let str4='my name is Anurag Kumar'
 let vowels3=/[aeiouAEIOU]/
 let arr1=str4.split('')
//  const res4=arr1.reduce((iniCh,ch)=>vowels.includes(ch)?iniCh+ch:iniCh,"")
 let res4=arr1.reduce((iniCh, ch)=> ch.match(vowels3)? iniCh +=ch:iniCh, '')
 console.log("5. Way...... ",res4);
 


