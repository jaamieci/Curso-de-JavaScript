'use strict';

/*
class Project {
    constructor() {
        console.log(typeof new.target);
    }
}
var p = new Project(); //function

*/

/*
class Project {
    constructor() {
        console.log(new.target);
    }
}
*/


/*
var p = new Project(); 

Salida:
class Project {
    constructor() {
        console.log(new.target);
    }
}
*/


/*
class SoftwareProject extends Project {
    constructor() {
        super();
    }
}

var p = new SoftwareProject();
*/
/*
Salida:
class SoftwareProject extends Project {
    constructor() {
        super();
    }
}
*/

/*
class SoftwareProject extends Project {
    
}

var p = new SoftwareProject();

/*
Salida:
class SoftwareProject extends Project {
    
}
*/

/*
class Project {
    constructor() {
        console.log(new.target.getDefaultId());
    }
}

class SoftwareProject extends Project {
    static getDefaultId() { return 99;}
}
var p = new SoftwareProject();//99
*/