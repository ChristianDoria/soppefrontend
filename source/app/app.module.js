(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMaterial',
        'ngMessages',
        'satellizer',
        //'templates',
        'app.config',
        'app.inicio',
        'app.footer',
        'app.header',
        'app.login',
        'app.servicios',
        'app.portafolio',
        'app.productos',
        'app.registro',
        'app.ecologico'

    ]);

})();
