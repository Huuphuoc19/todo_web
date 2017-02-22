
var todo = angular.module("todo", ["ui.router"]);

todo.factory("ApiHandling", function ($http, $q) {
	return {
		//api get all categories
		getAllCategories: function () {
			var dataToServer = {limit: -1}
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/getallcategories", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },

        //api tasks by cat id
		getAllTaskByCatId: function (catId) {
			var dataToServer = {cat_id: catId,limit: -1}
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/getalltask", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },

        //api tasks by cat id
		deleteCategory: function (catId) {
			var dataToServer = {cat_id: catId}
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/deletecatbyid", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },

        //api create cat
		createCategory: function (titleCat) {
			var dataToServer = {title: titleCat}
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/createcat", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },

        //api delete task
		deleteTaskById: function (taskId) {
			var dataToServer = {task_id: taskId}
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/deletetaskbyid", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },

        //api delete task
		updateState: function (taskId,state) {
			var dataToServer = {task_id: taskId,state: state}
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/updatetaskstate", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },

        //api delete task
		createTask: function (objectData,state) {
			var dataToServer = objectData;	
			dataToServer = JSON.stringify(dataToServer);
            var deferred = $q.defer();
		    $http.post(serverHost + "todo/createtask", dataToServer)
		    .success(function(data, status, headers, config) {		
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config) {
				deferred.resolve(data);
			});
            return deferred.promise;
        },
	}
});