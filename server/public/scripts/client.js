var app = angular.module('TimeApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController as vm'
    })
    $routeProvider.when('/projects', {
        templateUrl: '/views/projects.html',
        controller: "ProjectController as vm"
    })
    .otherwise({
        template: '<h1>404</h1>'
    });
});