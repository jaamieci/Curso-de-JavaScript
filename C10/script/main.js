//FizzBuzz 

var randomNumber = Math.round( Math.random() * 5); //round, otra instrucción que genera números aleatorios con una aproximación
//var randomNumber = 15;
/*if(randomNumber % 3 === 0 && randomNumber != 0){
	alert("fizz");
}
else if(randomNumber % 5 === 0 && randomNumber != 0){
	alert("buzz");
}
else if(randomNumber % 5 === 0 && randomNumber % 3 === 0){
	alert("fizzbuzz");
}
else{
	console.log(randomNumber);
}*/

//Forma más optima de hacer las condiciones, en vez de arriba que ocurría que 
//habían casos que se cumplían sin pasar por la adecuada condición.
if(randomNumber%3 === 0 && randomNumber !=0){
	if(randomNumber%5 === 0){
		alert("fizzbuzz");
	}
	else{
		alert("fizz");
	}
}
else if(randomNumber%5 === 0 && randomNumber != 0){
	alert("buzz");
}