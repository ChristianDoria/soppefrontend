(function () {
    'use strict';

    angular.module('app.moduloVentas.directivas', [

    ]).directive('moduloVentas', moduloVentas);

    function moduloVentas() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/moduloVentas/moduloVentas.html'
        }
    }
})();
