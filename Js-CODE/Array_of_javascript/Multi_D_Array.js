let arr=[
    ["Arun Kumar",25, "BCA"],
    ["Rahul Kumar", 24, "MCA",],
    ["Anurag kumar",22, "MBA"]
 ];
 document.write("<table border='1px' cellspacing='0'>")
 document.write("<th>Name </th>"+ "<th> Age </th>"+"<th>Course </th>")
 for(let i=0; i<arr.length;i++)
 {
     document.write("<tr>") 
     for(let j=0; j<arr[i].length;j++)
    
     document.write("<td>"+ arr[i][j] + "</td>");
  
     document.write("</tr>");
 }
 document.write("</table>");