app.controller('ProjectController', ['ProjectService', function(ProjectService) {
    console.log('ProjectController loaded');

    var self = this;

    self.project = ProjectService.project;
    self.getProject = ProjectService.getProject;
    self.getProject();
    self.addProject = ProjectService.addProject;
    self.deleteProject = ProjectService.deleteProject;
}]);