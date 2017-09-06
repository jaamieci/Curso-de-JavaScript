//Una versión más compleja de FizzBuzz
/*
- Si el número es divisible por 3, imprimir fizz
- Si el número es divisible por 5, imprimir buzz
- Si el número es divisible por 3 y 5, imprimir fizzbuzz
*/

for(var i = 1; i <= 100; i++){
	if(i%3 === 0){
		if(i%5 === 0){
			console.log("fizzbuzz");
		}
		else{
			console.log("fizz");
		}
		console.log("fizz");
	}else if(i%5 === 0){
		console.log("buzz");
	}
	else{
		console.log(i);
	}
}