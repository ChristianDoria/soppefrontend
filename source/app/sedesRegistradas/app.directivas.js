(function () {
    'use strict';

    angular.module('app.sedesRegistradas.directivas', [

    ]).directive('sedesRegistradas', sedesRegistradas);

    function sedesRegistradas() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/sedesRegistradas/list.html'
        }
    }


})();
