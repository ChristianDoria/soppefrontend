(function () {
    'use strict';

    angular.module('app.registroEmpresa.directivas', [

    ]).directive('registroEmpresa', registroEmpresa);
    //.directive('empresaList',empresaList);

    function registroEmpresa() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/registroEmpresa/registroEmpresa.html',
            controller: 'empresaCreateCtrl',
            controllerAs: 'vm'
        }
    }
//
//     function empresaList() {
//           return {
//             scope:{},
//             restrict: 'EA',
//             templateUrl:'app/registroEmpresa/list.html',
//             controller:'empresaListCtrl',
//             controllerAs:'vm'
//   }
// }
})();
