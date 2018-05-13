app.controller('EntryController', ['EntryService', function (EntryService) {
    console.log('EntryController loaded');

    var self = this;

    self.entry = EntryService.entry;
    self.getEntry = EntryService.getEntry;
    self.getEntry();
    self.deleteEntry = EntryService.deleteEntry;
    self.addEntry = EntryService.addEntry;
    self.project = EntryService.project;
    self.getProject = EntryService.getProject;
    self.getProject();
    self.newEntry = EntryService.createEmptyEntry();
}]);