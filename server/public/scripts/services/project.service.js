app.service('ProjectService', ['$http', function ($http) {
    console.log('ProjectService is loaded');
    var self = this;
    self.project={data: ''};

    self.getProject = function() {
        $http({
            method: 'GET',
            url: '/project'
        })
        .then(function (response) {
            self.project.data = response.data;
            console.log(response.data);
        })
        .catch(function (error) {
            console.log('Not working', error);
        })
    };

    self.addProject = function(newProject) {
        $http({
            method: 'POST',
            url: '/project',
            data: newProject
        })
        .then(function (response) {
            console.log(response)
            self.getProject();
        })
        .catch(function (error) {
            console.log('Not working', error);
        })
    };

}]);