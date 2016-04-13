(function(){
  'use strict';

  angular.module('app.registro.controller', [
  ]).controller('tercerosCreateCtrl', tercerosCreateCtrl);


  tercerosCreateCtrl.$inject = ['$location' ,'Terceros'];
  function tercerosCreateCtrl($location, Terceros){

    var vm=this;

    vm.create=function(){
        Terceros.save(vm.tercero);
        $location.url('/');

    }



  }




})();
