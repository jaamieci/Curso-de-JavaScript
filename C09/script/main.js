var answer = prompt("What is the capital of New York?");
 //Uso de la sentencia if/else
if(answer === "Albany"){
	alert("You are correct");
}else{
	alert("Sorry"+" "+answer+" "+"is not correct");
}

var favouriteAnimal = prompt("What is your favourite animal?");

if(favouriteAnimal === "cat"){
	alert("Cats are awesome!");
}
else if(favouriteAnimal === "dog"){
	alert("Dogs are okay.");
}
else{
	alert("Good Choise!");
}

//FizzBuzz 

var randomNumber = Math.round( Math.random() * 5); //round, otra instrucción que genera números aleatorios con una aproximación
if(randomNumber % 3 === 0){
	alert("fizz");
}
else if(randomNumber % 5 === 0){
	alert("buzz");
}
else{
	console.log(randomNumber);
}