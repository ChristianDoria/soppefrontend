(function () {
    'use strict';

    angular.module('app.productos.directivas', [

    ]).directive('productos', productos);
  //  .directive('productoslist', productosList);

    function productos() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/productos/productos.html',
            controller: 'productosCreateCtrl',
            controllerAs: 'vm'
        }
    }

//     function productosList() {
//   return {
//     scope:{},
//     restrict: 'EA',
//     templateUrl:'app/productos/list.html',
//     controller:'productosListCtrl',
//     controllerAs:'vm'
//   }
// }


})();
