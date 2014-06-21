
var ForFun = angular.module("ForFun", ["ngRoute"]).run(function() {
    FastClick.attach(document.body, null);  //attach(layer, options)
}); //add ngRoute ($routeProvider) as a dependency for the app, and init fastclick on body


<!--Routing-->
ForFun.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/main.html",
        controller:"mainCtrl"
    }).when("/main",{
        templateUrl:"app/partials/main.html",
        controller:"mainCtrl"
    }).when("/view2",{
        templateUrl:"app/partials/view2.html",
        controller:"view2Ctrl"
    }).otherwise({
        redirectTo:"/"
    })
});