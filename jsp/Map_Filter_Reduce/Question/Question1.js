
let Students=[
    {name:"Anurag", rollNumber:20, Marks:80},
    {name:"Ravi", rollNumber:13, Marks:55},
    {name:"Priti", rollNumber:18, Marks:65},
    {name:"Rohit", rollNumber:19, Marks:72},
    {name:"Priti", rollNumber:12, Marks:65},
    {name:"Rohit", rollNumber:35, Marks:72}
]

// 1. Console the name of each student in upper case

 let sName=[]
 // way-1
  for(let x in Students) sName.push(Students[x].name.toUpperCase());
  console.log(sName);

   // way-2
  let sName2=[]
  for(let x of Students) sName2.push(x.name.toUpperCase());
  console.log(sName2);

   // way-2
  let sName3=Students.map((studentName)=>studentName.name)
  console.log(sName3);

  //2. console the markes of each student which is greater then 65

   let Smarks=Students
   .map((studentMarks)=>studentMarks.Marks)
   .filter((res)=>res>65)
   console.log(Smarks)
  
//3. console the markes of each student which is greater then 65 and roll number less then 15
  let res=Students.filter((mr)=> mr.Marks < 65 && mr.rollNumber < 18)
  console.log(res)

  // through chaning
  let res1=Students
  .map((sdetails)=> sdetails)
  .filter((marksRoll)=>(marksRoll.Marks>75 && marksRoll.rollNumber>18))
  .map((name)=>name.Marks)
  console.log(res1)

//3. console the sum of markes of each student.
let sumMarks=Students.reduce((acu, CurrEle)=> acu+CurrEle.Marks, 0)
console.log(sumMarks);

// through chaning
let sumMarks1=Students
.map((Smarks)=>Smarks.Marks)
.reduce((acu, CurrEle)=> acu+CurrEle, 0)
console.log(sumMarks1);


