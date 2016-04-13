(function () {
    'use strict';

    angular.module('app.registro.directivas', [

    ]).directive('registro', registro);

    function registro() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/registro/registro.html',
            controller: 'tercerosCreateCtrl',
            controllerAs: 'vm'
        }
    }
})();
