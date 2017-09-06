var myCoffee = {
	flavor: "espresso",
	temperature: "piping hot",
	ounces: 100,
	milk: true,

	reheat: function (){
		if(myCoffee.temperature === "cold"){
			myCoffee.temperature = "piping hot";
			alert("Your coffee has been reheated!");
		}
	}
};

myCoffee.temperature = "cold";
myCoffee.reheat();

//Otras forma de setear el atributo 'temperature' de un opbjeto
myCoffee["temperature"] = "lukewarm";
myCoffee[1] = "lukewarm";

