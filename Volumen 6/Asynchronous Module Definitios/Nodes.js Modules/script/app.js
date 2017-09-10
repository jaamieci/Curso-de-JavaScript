var Calc = require('./main.js');
/*require no forma parte del lenguaje JavaScript, es parte de Node.js junto al objeto module para usarlo en el navegador se puede hacer uso del proyecto REQUIRE.JS*/

 Calc
    .add(1,2)
    .multiply(3)
    .equals(function(result){
        console.log(result)
    });