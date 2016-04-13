(function () {
    'use strict';

    angular.module('app.productos.directivas', [

    ]).directive('productoslist', productosList)
    .directive('productoscreate',productosCreate)
    .directive('productosupdate',productosUpdate);


    function productosList() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/productos/lista.html',
            controller: 'productosListCtrl',
            controllerAs: 'vm'
        }
    }

    function productosCreate() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/productos/create.html',
            controller: 'productosCreateCtrl',
            controllerAs: 'vm'
        }
    }

      function productosUpdate() {
        return {
            scope: {},
            restrict: 'EA',
            templateUrl: 'app/productos/create.html',
            controller: 'productosUpdateCtrl',
            controllerAs: 'vm'
        }
    }
})();
