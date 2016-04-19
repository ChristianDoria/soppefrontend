(function(){
  'use strict';

  angular.module('app.registroEmpresa.controller', [
  ]).controller('empresaCreateCtrl', empresaCreateCtrl)
    .controller('empresaListCtrl', empresaListCtrl);


empresaCreateCtrl.$inject = ['$mdToast', '$location' ,'Empresa'];
function empresaCreateCtrl( $mdToast, $location, Empresa){
    var vm=this;
    vm.create=function(){
        Empresa.save(vm.empresa);
        $location.url('/registroSede');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Empresa Registrada...')
          .position('bottom right'));
    }
  }

  empresaListCtrl.$inject = ['Empresa'];
  function empresaListCtrl(Empresa) {
    var vm = this;
    vm.empresaList = Empresa.query();
  }



})();
