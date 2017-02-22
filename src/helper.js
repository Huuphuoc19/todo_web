

todo.factory("Helper", function ($http) {
	return {		
		digestTodoCompleted: function(arrTask, type){
			// type = 1 is todo else completed
			var result = {
				todo: [],
				completed: []
			}
			var l = arrTask.length;
			for(var i = 0 ; i < l ; i++){
				if(arrTask[i].state_id == type){
					result.todo.push(arrTask[i]);
				}else{
					result.completed.push(arrTask[i]);
				}
			}
			return result;
		}, // end
	}
});