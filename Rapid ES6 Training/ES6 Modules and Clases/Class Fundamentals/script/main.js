/*class Task {
    
}

console.log(typeof Task); //function

let task = new Task();

console.log(typeof task);//object
console.log(task instanceof Task);//true
*/

/*
class Task {
    showId() {
        console.log('99');
    }
}

let task = new Task();
task.showId();//99

console.log(task.showId === Task.prototype.showId);//true

*/

/*
class Task {
    constructor() {
        console.log('constructing Task');
    }
    showId() {
        console.log('99');
    }
}

let task = new Task();//constructing Task

*/

/*
class Task {
    //let taskId = 9000;
    constructor() {
        console.log('constructing Task');
    }
    showId() {
        console.log('99');
    }
}

let task = new Task();//constructing Task
*/

/*
let task = new Task();//Task is not defined

class Task {
    constructor() {
        console.log('constructing Task');
    }
}
*/

/*
let newClass = class Task {
    constructor() {
        console.log('constructing Task');
    }
};

new newClass(); //constructing Class
*/

/*
let Task = function() {
    console.log('constructing Task');
};
let task = {};
Task.call(task); //constructing* Task
*/

/*
class Task {
    constructor() {
        console.log('constructing Task');
    }
};

let task = {};
Task.call(task);//Class constructor Task cannot be invoked without 'new'
*/

/*
function Project() { };
console.log(window.Project === Project);//true
*/

/*
class Task { };
console.log(window.Task === Task);//false
*/