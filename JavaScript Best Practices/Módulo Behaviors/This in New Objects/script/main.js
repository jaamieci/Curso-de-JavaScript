var obj = function() {
    console.log(this); //obj {}
    this.hello = 'hello';
    
    this.greet = function() {
        console.log(this.hello);
    }
    
    this.delayGreeting = function() {
        setTimeout(this.greet, 1000);
    }
}

var greeter = new obj();
//console.log(greeter); //obj {hello: "hello", greet: ƒ}
//greeter.greet();//hello

//Imprime undefined porque setTimeout no está llamando a object.greet
greeter.delayGreeting();
//ya que esto sería hacer algo como 
//var funcion = greeter.greet que no apunta a nada

//para que imprima hello tiene que hacerse esto:
/*this.delayGreeting = function() {
    setTimeout(this.greet(), 1000);
}*=
