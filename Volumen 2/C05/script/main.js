var i = 0;

//Ciclo Do While
/*do{
	//console.log(i);
	i++;
}while(i < 11);*/

i=0;
//Ciclo While
while(i < 11){
	console.log(i);
	i++;
}

var sad = confirm("Would you like to be cheered up?");

while(sad){
	alert("What do you call a boomerang that doesn't come back? ... A stick!");
	var yes = confirm("Would you like to continue our session?");

	if(yes){
		var response = prompt("Tell me about your troubles:", "Type your feelings here");

		if(response){
			alert("I am sorry you are feeling down about that. I know you can't see it but...");
			sad = false;
		}
	}else{
		sad = false;
	}
}

/*
Another example

var userLoggedIn = false;

while(userLoggedIn){
	//Display login info
}
*/