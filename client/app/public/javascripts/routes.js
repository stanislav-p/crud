var app = angular.module('crudRoutes', [])

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'views/main.html'
    })

    .when('/companies', {
        templateUrl: 'views/company.html',
        controller: 'companyCtrl',
        controllerAs: 'company'
    })

    .when('/companies/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'editCtrl',
        controllerAs: 'edit'
    })

    .when('/addcompany', {
        templateUrl: 'views/add.html',
        controller: 'addCtrl',
        controllerAs: 'add'
    })

    .otherwise({
        redirectTo: '/'
    });

     $locationProvider.html5Mode({'enabled': true, 'requireBase': false});
});