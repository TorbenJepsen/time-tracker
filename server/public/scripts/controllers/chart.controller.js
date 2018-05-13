app.controller('ChartController', ['ProjectService', function(ProjectService) {
    console.log('ChartController loaded');

    var self = this;

    self.project = ProjectService.project;
    self.getProject = ProjectService.getProject;
    self.getProject();
    self.createChart = ProjectService.createChart;
  

}]);