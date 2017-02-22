
// handle url page

todo.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {    
	$urlRouterProvider.otherwise("/");
    // xu li duong dan cho menu
    $stateProvider
    .state("index", {
        url: "/",
        templateUrl: "templates/index.htm",
        controller: "indexController",
        controllerAs: "indexCtrl",
        // 
        resolve: {
           
        }
    })
    //$locationProvider.html5Mode(true);
});