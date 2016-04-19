(function () {
    'use strict';

    angular.module('app.registroSede.router', [
      'app.registroSede.controller'
    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('registroSede', {
                url: '/registroSede',
                        template: '<registro-sede/>'
            });
    };
})();
