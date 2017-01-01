angular.module("dznApp").controller("MainController", ["EventsService", function (EventsService) {
    var vm = this;

    vm.events = [];

    EventsService.getEvents().then(function (events) {
        vm.events = events;
    });

    vm.toggleAttendance = function (eventID) {
        EventsService.toggleEventAttendance(eventID);
    };
}]);