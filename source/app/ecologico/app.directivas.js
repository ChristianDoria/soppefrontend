(function () {
    'use strict';

    angular.module('app.ecologico.directivas', [

    ]).directive('ecologico', ecologico);

    function ecologico() {
        return {
            scope: {},
            templateUrl: 'app/ecologico/ecologico.html'
        }
    }
})();
