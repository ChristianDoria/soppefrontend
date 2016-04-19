(function () {
    'use strict';

    angular.module('app.registroEmpresa.router', [
      'app.registroEmpresa.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('registroEmpresa', {
                url: '/registroEmpresa',
                        template: '<registro-empresa/>'
            });
    };
})();
