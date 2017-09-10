//export let projectId = 99;
/*
var project = {
    projectId: 99
};


module.exports = project;
*/

var project = function(value){
    this.projectId = value
}

var my = new project(4);
module.exports = my;