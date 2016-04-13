(function () {
    'use strict';
    angular.module('app.productos.services', [

    ])
        .factory('Productos', Productos);

    Productos.$inject = ['$resource','BASEURL'];


    //Este servicio nos provee de los métodos GET POST PUT DELETE
    function Productos($resource, BASEURL) {
      return $resource(BASEURL + '/productos/:idProducto')

    }

    //De igual manera los factory nos sirven para almacenar información
    //y que nos pueda servir en cualquier controlador o lugar de la aplicación

})();
