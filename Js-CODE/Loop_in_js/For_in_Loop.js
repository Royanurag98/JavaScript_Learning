// for in loop 
/*for in loop is used to get the key(properties) of any iterable object(like Array ,string, Maps, NodeLists)  
   We can also access the array index as a key with the help of for in loop.The key is used to access the value 
   of iterable object.keyName[objName];*/

// for in loop use with object
    let obj={
        "Name": "Anurag",
        "Age": 24,
        "Student":"MCA"
        };
        for(let objKey in obj){
             console.log(`<br>Keys of object is ${objKey} and Values of object is ${obj[objKey]} `)
        }

                
// for in loop use with Array
    let arr=[2,3,4,5,6,7]
    for(let arrKey in arr){ 
        console.log(`<br>Keys of Array is ${arrKey} and Values of Array is ${arr[arrKey]} `) 

   }
    
                                               
// for in loop use with String
    let str= "Anurag";
    for(let strKey in str){  
    document.write(`<br>Keys of String is ${strKey} and Values of String is ${str[strKey]} `);    
   }