'use strict';

/*
class Project {
    constructor() { this.location = 'Mazatlan,'}
}

class SoftwareProjects extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProjects();
console.log(p.location); //Mazatlan
*/

/*
class Project {
    constructor() { let location = 'Mazatlan,'}
}

class SoftwareProjects extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProjects();
console.log(p.location); //undefined
*/

/*
class Project {
    constructor() { this.location = 'Mazatlan'}
}

class SoftwareProjects extends Project {
    constructor() {
        super();
        this.location = this.location + ' Beach';
    }
}

let p = new SoftwareProjects();

console.log(p.location); //Mazatlan Beach
*/