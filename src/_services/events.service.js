angular.module("dznApp").factory("EventsService", ["$q", function ($q) {
    var vm = this;
    
    var date = new Date(2016, 11, 7, 20, 30);

    var events = [{
        id: 0,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        id: 1,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        id: 2,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        attending: true,
        attendants: ["Oscar Lemmens", "Daan Linnartz"]
    }, {
        id: 3,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        id: 4,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        id: 5,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        attending: true,
        attendants: ["Oscar Lemmens", "Daan Linnartz"]
    }, {
        id: 6,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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
        id: 7,
        name: "De Kracht van Tonen",
        date: date,
        time: date,
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

    /** PRIVATE FUNCTIONS */
    function _findEvent(eventID) {
        for (var i=0; i<events.length; i++) {
            if (events[i].id === eventID) {
                return events[i];
            }
        }

        return null;
    }

    /** PUBLIC API */
    function getEvents() {
        var deferred = $q.defer();

        return $q.resolve(events);
    }

    function toggleEventAttendance(eventID) {
        var event = _findEvent(eventID);

        if (!event) {
            return;
        }

        event.attending = !event.attending;
    }

    return {
        getEvents: getEvents,
        toggleEventAttendance: toggleEventAttendance
    }
}]);