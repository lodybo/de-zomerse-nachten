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

    it("Should get some events", function () {
        var events;
        
        EventService.getEvents().then(function (data) {
            events = data;
        });

        scope.$apply();
        expect(events.length).toBeGreaterThan(0);
    });
});