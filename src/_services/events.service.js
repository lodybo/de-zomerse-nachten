angular.module("dznApp").factory("EventsService", ["$q", function ($q) {
    var vm = this;
    
    var date = new Date(2016, 11, 7, 20, 30);

    var events = [{
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

    function getEvents() {
        var deferred = $q.defer();

        return $q.resolve(events);
    }

    return {
        getEvents: getEvents
    }
}]);