'use strict';
/*
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    
}

let p = new SoftwareProject(); //constructing Project
*/

/*
class Project {
    constructor(name) {
        console.log('constructing Project: ' + name);
    }
}

class SoftwareProject extends Project {
    
}

let p = new SoftwareProject('Mazatlan'); //constructing Project Mazatlan
*/


/*
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        console.log('constructing Sofware');
    }
}
let p = new SoftwareProject();
//constructing project
//constructing Software

*/

/*
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        console.log('constructing Sofware');
    }
}
let p = new SoftwareProject();
//
//Must call super constructor in derived class before accessing 'this' or returning from derived constructorat SoftwareProject

*/

/*
class Project {
    
}

class SoftwareProject extends Project {
    constructor() {
        console.log('constructing Sofware');
    }
}
let p = new SoftwareProject();
// Must call super constructor in derived class before accessing 'this' or returning from derived constructorat SoftwareProject
*/


/*
class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    
}

let p = new SoftwareProject();
console.log(p.getTaskCount());//50
*/

/*
class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    getTaskCount() {
        return 66;
    }
}

let p = new SoftwareProject();
console.log(p.getTaskCount());//66
*/


/*
class Project {
    getTaskCount() {
        return 50;
    }
}


class SoftwareProject extends Project {
    getTaskCount() {
        return super.getTaskCount() + 6;
    }
}

let p = new SoftwareProject();
console.log(p.getTaskCount());//56
*/

/*
let Project = {
    getTaskCount() {
        return 50;
    }
}

let SoftwareProject = {
    getTaskCount() {
        return super.getTaskCount() + 7;
    }
}

//let p = new SoftwareProject();
Object.setPrototypeOf(SoftwareProject, Project);
console.log(SoftwareProject.getTaskCount());//57
*/
