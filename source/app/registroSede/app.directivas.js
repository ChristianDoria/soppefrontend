(function () {
    'use strict';

    angular.module('app.registroSede.directivas', [

    ]).directive('registroSede', registroSede);

    function registroSede() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/registroSede/registroSede.html',
            controller: 'sedeCreateCtrl',
            controllerAs: 'vm'
        }
    }
})();
