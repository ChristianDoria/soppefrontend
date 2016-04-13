(function () {
    'use strict';

    angular.module('app.ecologico.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('ecologico', {
                url: '/ecologico',
                views: {
                    'ecologico': {
                        template: '<ecologico/>'
                    },
                    'piepagina': {
                        template: '<piepagina/>'
                    },
                    'encabezado': {
                        template: '<encabezado/>'
                    }
                }
            });
    };
})();
