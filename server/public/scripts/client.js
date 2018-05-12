var app = angular.module('TimeApp', ['ngRoute', 'ngMaterial', 'md.data.table']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController as vm'
    })
    $routeProvider.when('/project', {
        templateUrl: '/views/projects.html',
        controller: "ProjectController as vm"
    })
    .otherwise({
        template: '<h1>404</h1>'
    });
});