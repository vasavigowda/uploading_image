module.exports = function(app) {
    const todoList = require('../Controllers/location');
    
        app.route('/location')
        .get(todoList.get_a_data)
        .post(todoList.post_a_data)
        
        app.route('/location/:id')
        .delete(todoList.delete_a_task)
        .put(todoList.update_a_task)
        
    };
    
    
    
    
    
    
       
    