
// index contrller
todo.controller("indexController", function ($scope,$sce,ApiHandling,Helper){
    var vm = this;
    vm.cats = [];
    vm.selected = -1;
    vm.todos = {
        todo: [],
        completed: []
    }

    var addForm = angular.element(document.getElementById("add-form"));

    // fill categories
    var getAllCat = function(){
        ApiHandling.getAllCategories()
        .then(function(data){
            // if not error
            if(data.result != -1){
                vm.cats = data.data;
                // load first
                if(vm.selected != -1){
                    vm.getTasksByCatId(vm.selected); 
                }else if(vm.cats[0]){
                    // get first array el
                    vm.getTasksByCatId(vm.cats[0].id); 
                }                    
            }
        },function(err){
            console.log(err);
        });
    }

    // get cateories
    getAllCat();

    // get task for every cat
    vm.getTasksByCatId = function(catId){
        vm.selected = catId;
        // fill categories
        ApiHandling.getAllTaskByCatId(catId)
        .then(function(data){
            // if not error
            if(data.result != -1){ 
                var todoCompletedTask = Helper.digestTodoCompleted(data.data,1);
                // add data to view
                vm.todos = todoCompletedTask;
            }
        },function(err){
            console.log(err);
        });
    }

    // delete cat
    vm.deleteCatById = function(catId,event){
        event.stopPropagation();
        // delete category   
        ApiHandling.deleteCategory(catId)
        .then(function(data){
            // if not error
            if(data.result != -1){
                // delete successfully
                var list = angular.element(document.getElementById("list#"+catId));
                list.hide();      
            }
        },function(err){
            console.log(err);
        });
    }

    // add categories
    vm.addCat = function(){
        // do notthing if no input
        if(vm.titleCat == undefined || vm.titleCat == null){
            return;
        }
        // create cat API
        ApiHandling.createCategory(vm.titleCat)
        .then(function(data){
            // if not error
            if(data.result != -1){
                vm.titleCat = null;
                getAllCat();       
            }
        },function(err){
            console.log(err);
        });
    }

    // cancel
    vm.cancelAddCat = function(){
        vm.titleCat = null;
    }

    // vm remove task
    vm.removeTask = function(taskId,event){
        // stop bubble
        event.stopPropagation();
        ApiHandling.deleteTaskById(taskId)
        .then(function(data){
            // if not error
            if(data.result != -1){
                vm.getTasksByCatId(vm.selected);  
            }
        },function(err){
            console.log(err);
        });
    }

    // update state
    vm.updateTaskState = function(taskId,state,event){
        // stop bubble
        event.stopPropagation();
        ApiHandling.updateState(taskId,state)
        .then(function(data){
            // if not error
            if(data.result != -1){
                // get stask
                vm.getTasksByCatId(vm.selected);  
            }
        },function(err){
            console.log(err);
        });
    }

    // add task
    //{"title":"test","description":"test","cat_id":1}
    vm.addTask = function(){

        if(vm.titleTask && vm.contentTask && vm.selected != -1){
            
            var dataObject = {
                title: vm.titleTask,
                description: vm.contentTask,
                cat_id: vm.selected
            }
            // create
            ApiHandling.createTask(dataObject)
            .then(function(data){
                // if not error
                console.log(1);
                if(data.result != -1){
                    // get stask
                    vm.getTasksByCatId(vm.selected);  
                    // update value
                    vm.titleTask = null;
                    vm.contentTask = null;
                }
            },function(err){
                console.log(err);
            });
        }else{  
            console.log("Test Emplty");
        }
    }

    // toggle
    vm.handleToggleForm = function(){
        addForm.slideToggle();
    }

});



