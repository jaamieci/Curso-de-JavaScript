//Este archivo va a ser responsable de todas las llamadas de base de datos

var repo = function() {
    return {
        get: function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db';
            }
        },
        
        save: function(task){
            console.log('saving ' + task.name + ' to the db');
        }
        
    }
}

module.exports = repo();