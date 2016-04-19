(function () {
    'use strict';
    angular.module('app.registroSede.services', [

    ])
        .factory('Sede', Sede);




        function Sede($resource, BASEURL) {
            return $resource(BASEURL + '/sede/:idSede',
            { idSede: '@idSede' }
          )
        }


})();
