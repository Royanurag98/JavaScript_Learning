//LEGAL SHADOWING  AND ILLEGAL SHADOWING IN JS//////////////////////////

/*we can shadow var variable by let variable but cannot do the opposite. So, if we try to 
shadow let variable by var variable, it is known as Illegal Shadowing and it will give the 
error as “variable is already defined.” */
function func() {
	var a = 'Geeks';
	let b = 'Geeks';
	
	if (true) {
		let a = 'GeeksforGeeks'; // Legal Shadowing
		// var b = 'Geeks'; // Illegal Shadowing
		console.log(a); // It will print 'GeeksforGeeks'
		console.log(b); // It will print error
	}
}
func();

//TDZ (Temporal dad zone )////////////////////////////////////////////////

/*Basically TDZ is a state when we declare a variable but not initialized but after some time we 
initialized the value of that variable . between that time of deceleration to initialization is called TDZ.*/

console.log(Name)// this time Name variable lies in TDZ.
let Name="Anurag";
console.log(Name)
