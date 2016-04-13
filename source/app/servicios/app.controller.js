(function() {
  'use strict';

  angular
    .module('app.servicios.controller', [])
    .controller('ServiciosListCtrl', ServiciosListCtrl);

  ServiciosListCtrl.$inject = ['Servicios'];
  function ServiciosListCtrl(Servicios) {
    var vm = this;

    vm.serviciosList = Servicios.query();
  }

})();
