(function () {
    'use strict';

    angular.module('app.empresasRegistradas.directivas', [

    ]).directive('empresasRegistradas', empresasRegistradas);

    function empresasRegistradas() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/empresasRegistradas/list.html'
        }
    }


})();
