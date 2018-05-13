app.service('ProjectService', ['$http', function ($http) {
    console.log('ProjectService is loaded');
    var self = this;
    self.project = { data: '' };

    self.getProject = function () {
        $http({
            method: 'GET',
            url: '/hours'
        })
            .then(function (response) {
                self.project.data = response.data;
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('Not working', error);
            })
    };


    self.addProject = function (newProject) {
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

    self.deleteProject = function (project) {
        console.log(project);
        $http({
            method: 'DELETE',
            url: '/project',
            params: project

        })
            .then((response) => {
                self.getProject();
            })
            .catch((error) => {
                console.log('error making request', error);
                alert('Something went wrong! Check the server.');
            });
    }


}]);