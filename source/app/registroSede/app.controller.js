(function(){
  'use strict';

  angular.module('app.registroSede.controller', [
  ]).controller('sedeCreateCtrl', sedeCreateCtrl)
    .controller('sedeListCtrl', sedeListCtrl);


  sedeCreateCtrl.$inject = ['$mdToast', '$location' ,'Sede'];
  function sedeCreateCtrl($mdToast, $location, Sede){
    var vm=this;
    vm.create=function(){
        Sede.save(vm.sede);
        $location.url('/');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Sede Registrada...')
          .position('bottom right'));
      }
    }

    sedeListCtrl.$inject = ['Sede'];
    function sedeListCtrl(Sede) {
      var vm = this;
      vm.sedeList = Sede.query();
    }



})();
