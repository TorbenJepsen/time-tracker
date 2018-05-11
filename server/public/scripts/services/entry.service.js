app.service('EntryService', ['$http', function ($http) {
    console.log('EntryService is loaded');
    var self = this;
    self.entry={data: ''};
    self.project ={data: ''};

    self.getEntry = function() {
        $http({
            method: 'GET',
            url: '/entry'
        })
        .then(function (response) {
            self.entry.data = response.data;
            console.log(response.data);
        })
        .catch(function (error) {
            console.log('Not working', error);
        })
    };

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

    self.addEntry = function(newEntry) {
        console.log(newEntry);
        let hours = newEntry.start_time - newEntry.end_time/(1000*60*60);
        console.log(hours);
        newEntry = {
            entry: '',
            date: '',
            start_time: '',
            end_time: '',
            hours: '',
            project_name: ''
        };
        console.log(newEntry);
        $http({
            method: 'POST',
            url: '/entry',
            data: newEntry
        })
        .then(function (response) {
            console.log(response)
            self.getEntry();
        })
        .catch(function (error) {
            console.log('Not working', error);
        })
    };

}]);