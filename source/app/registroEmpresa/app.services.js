(function () {
    'use strict';
    angular.module('app.registroEmpresa.services', [

    ])
        .factory('Empresa', Empresa);




        function Empresa($resource, BASEURL) {
            return $resource(BASEURL + '/empresa/:idEmpresa',
            { idEmpresa: '@idEmpresa' }
          )
        }


})();
