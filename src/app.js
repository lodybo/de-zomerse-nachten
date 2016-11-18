angular.module("dznApp", ["ngRoute"])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main/main.html",
                controller: "MainController as $ctrl"
            })
            .when("/detail/:id", {
                templateUrl: "detail/details.html",
                controller: "detailCtrl as ctrl"
            });
    }]);