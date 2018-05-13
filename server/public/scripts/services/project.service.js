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
                self.createChart(self.project.data);

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

    self.createChart = function (data) {

        var arrData = new Array();
        var arrLabels = new Array();

        data.map = function(item) {
            arrData.push(item.sum);
            arrLabels.push(item.name);

            self.data = [];
            self.labels = [];
    
            self.data.push(arrData);
    
            for (let i = 0; i < arrLabels.length; i++) {
                self.labels.push(arrlabels[i]);
            }
            console.log(self.data, self.labels);

        
        };


            
        };


}]);