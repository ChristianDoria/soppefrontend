(function () {
    'use strict';

    angular.module('app.productos.controller', [

    ]).controller('productosListCtrl', productosListCtrl)
    .controller('productosCreateCtrl', productosCreateCtrl)
    .controller('productosUpdateCtrl', productosUpdateCtrl);
    //List
productosListCtrl.$inject = ['Productos'];
    function productosListCtrl(Productos) {
this.productos = Productos.query();
    }

    //Create
productosCreateCtrl.$inject = ['Productos'];
    function productosCreateCtrl(Productos) {
      this.create = function(){
        Productos.save(this.productos);
      }
    }
    
        productosUpdateCtrl.$inject=['$stateParams', '$location', '$mdToast', 'Productos'];
    function productosUpdateCtrl($stateParams, $location, $mdToast, Productos) {
      this.id = $stateParams.idProducto;
      this.producto = Productos.get({ idProducto: this.id});

      this.update = function () {
        Productos.update(this.producto, function () {
          $location.path('/productos');
          $mdToast.show(
              $mdToast.simple()
                .textContent('Se ha actualizado el producto...')
                .position('bottom right')
          )
        })
      }
    }

})();
