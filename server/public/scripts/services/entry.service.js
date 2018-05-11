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

        let hours = (newEntry.end_time - newEntry.start_time)/(1000*60*60);
        console.log(hours);
        postEntry = {
            entry: newEntry.entry,
            date: newEntry.date,
            start_time: newEntry.start_time,
            end_time: newEntry.end_time,
            hours: hours,
            project_id: newEntry.project_id
        };
        console.log(newEntry);
        $http({
            method: 'POST',
            url: '/entry',
            data: postEntry
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