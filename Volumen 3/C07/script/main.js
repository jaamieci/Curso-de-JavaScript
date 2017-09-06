window.alert("hola"); 

function lameJoke(){
    randomNumber = Math.roudn(Math.random() * 2);
    
    if(randomNumber === 1){
        alert("how many tickles does it take to make an octopus laugh? Ten tickles");
    } else if (randomNumber === 2){
        alert("Why did the scarecrow win an award? Because he was outstanding in his field.");
    } else {
        alert("Why did the chicken cross the road? to get to the other side!");
        
    }
}

lameJoke();

function usingConventions() {
    "use strict";
    var randomNumber = Math.roudn(Math.random() * 2);
    
    if (randomNumber === 1) {
        window.alert("how many tickles does it take to make an octopus laugh? Ten tickles");
    } else if (randomNumber === 2) {
        window.alert("Why did the scarecrow win an award? Because he was outstanding in his field.");
    } else {
        window.alert("Why did the chicken cross the road? to get to the other side!");
        
    }
}

usingConventions();

