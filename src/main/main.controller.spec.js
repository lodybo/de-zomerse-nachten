describe("Testing the Main Controller", function () {
    beforeEach(module("dznApp"));

    var mainCtrl, scope, q, EventService;

    var response = [{
        name: "De Kracht van Tonen",
        date: Date.now(),
        time: Date.now(),
        address: "Chrysantenstraat 23, 5644KL Eindhoven",
        presenter: "Lody Borgers",
        summary: "lol",
        description: "lololol",
        program: [{
            activity: "Binnenloop",
            time: "20:30"
        }, {
            activity: "Start van de avond",
            time: "21:00"
        }, {
            activity: "Einde",
            time: "22:30"
        }],
        attending: false,
        attendants: ["Oscar Lemmens", "Daan Linnartz"]
    }, {
        name: "De Kracht van Tonen",
        date: Date.now(),
        time: Date.now(),
        address: "Chrysantenstraat 23, 5644KL Eindhoven",
        presenter: "Lody Borgers",
        summary: "lol",
        description: "lololol",
        program: [{
            activity: "Binnenloop",
            time: "20:30"
        }, {
            activity: "Start van de avond",
            time: "21:00"
        }, {
            activity: "Einde",
            time: "22:30"
        }],
        attending: false,
        attendants: ["Oscar Lemmens", "Daan Linnartz"]
    }];

    function MockEvents() {
        function _getEvents() {
            var deferred = q.defer();

            deferred.resolve(response);

            return deferred.promise;
        }

        return {
            getEvents: _getEvents
        }
    }
    
    beforeEach(inject(["$controller", "$rootScope", "$q", function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();
        q = $q;

        EventService = MockEvents();

        mainCtrl = $controller("MainController", {
            $scope: scope
        });
    }]));

    describe("Testing the event loading", function () {
        var events;
        beforeEach(function () {
            EventService.getEvents().then(function (data) {
                events = data;
            });

            scope.$apply();
        }); 

        it("Should get some events", function () {
            expect(events.length).toBeGreaterThan(0);
        });

        it("Should toggle an event whether you're attending it or not", function () {
            var event = events[0];

            expect(event.attending).toBeFalsy();

            scope.toggleAttendance(event.id);

            expect(event.attending).toBeTruthy();

            scope.toggleAttendance(event.id);

            expect(event.attending).toBeFalsy();
        });
    });
});