(function () {
    'use strict';
    angular.module('app.registro.services', [

    ])
        .factory('Terceros', Terceros);




        function Terceros($resource, BASEURL) {
            return $resource(BASEURL + '/terceros/:idTerceros',
            { idUsuario: '@idTerceros' }
          )
        }


})();
