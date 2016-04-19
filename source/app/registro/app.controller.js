(function(){
  'use strict';

  angular.module('app.registro.controller', [
  ]).controller('tercerosCreateCtrl', tercerosCreateCtrl);


  tercerosCreateCtrl.$inject = ['$mdToast', '$location' ,'Terceros'];
  function tercerosCreateCtrl($mdToast, $location, Terceros){

    var vm=this;

    vm.create=function(){
        Terceros.save(vm.tercero);
        $location.url('/registroEmpresa');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Usuario Registrado...')
          .position('bottom right'));

    }



  }




})();
