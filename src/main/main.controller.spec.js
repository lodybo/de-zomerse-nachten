describe("Karma Quick Test", function () {
    beforeEach(module("dznApp"));

    var mainCtrl, scope;

    beforeEach(inject(["$controller", "$rootScope", function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller("MainController", {
            $scope: scope
        });
    }]));

    it("Should get some events", function () {
        
    });
});