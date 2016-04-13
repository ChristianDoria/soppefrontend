(function () {
  'use strict';

  angular
    .module('app.servicios.services', [])
    .factory('Servicios', Servicios);

    Servicios.$inject = ['$resources', 'BASEURL'];
    function Servicios($resources, BASEURL) {
      return $resources(BASEURL + 'servicios/:id', {
        id: '@id'
      });

    }
})();
