//Juego de Apocalipsis Zombie

//Descripción del escenario
alert("It is the zombie apocalipsis, your are looting a store suddenly a zombie bursts through the door!");
var weapon = prompt("Your search around frantically for a weapon. What do you choose? A bow and arrow, and axe, or a rubber chicken?");
//Generamos un número random que indica nuesta supervivencia (a trave de 0 o 1)
var randomNumber = Math.round(Math.random()); 

alert("You attack the zombie with your" + " "+ weapon);

if(randomNumber === 0){
	alert("The zombie bites you, you lose!!!");
}else if(randomNumber === 1){
	alert("You kill the zombie with your" + " " + weapon + ". You win!!");
}
