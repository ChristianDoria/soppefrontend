(function(){
  'use strict';

  angular.module('app.productos.controller', [
  ]).controller('productosCreateCtrl', productosCreateCtrl);
  //  .controller('productosListCtrl', productosListCtrl);


  productosCreateCtrl.$inject = ['$location' ,'Producto'];
  function productosCreateCtrl($location, Producto){

    var vm=this;

    vm.create=function(){
        Producto.save(vm.producto);
        $location.url('/productos');
    }
  }

    // productosListCtrl.$inject=['Productos'];
    // function productosListCtrl(Productos){
    //   this.producto = Producto.query();
    // }


})();
