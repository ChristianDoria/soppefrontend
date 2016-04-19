(function () {
    'use strict';
    angular.module('app.productos.services', [

    ])
        .factory('Producto', Producto);




        function Producto($resource, BASEURL) {
            return $resource(BASEURL + '/productos/:idProducto',
            { idProducto: '@idProducto' }
          )
        }




})();
