(function () {
    'use strict';

    angular.module('app.productos.router', [
        'app.productos.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('productos',{
              url:'/productos',
                  template:'<productoslist/>'
            })
            .state('productoscreate',{
              url:'/productos/create',
                  template:'<productoscreate/>'
            });
    };
})();
