(function(){
  'use strict';
  angular
  .module('app.login.controller',[])
  .controller('LoginController',LoginController);
  LoginController.$inject = ['$auth', '$location', '$mdToast'];
  function LoginController($auth, $location, $mdToast) {
    var vm = this;

    vm.signIn = signIn;
    vm.getCurrentUser = getCurrentUser;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;
    vm.isAdmin = isAdmin;
    vm.isUser = isUser;


    function signIn(){
    $auth.login(vm.user)
        .then(function(){
          vm.user = {};
          $location.path('/moduloVentas');
          $mdToast.show(
            $mdToast.simple()
            .textContent('Sesion Iniciada...')
            .position('bottom right'));
        })
        .catch(function (error){
          $location.path('/');
          $mdToast.show(
            $mdToast.simple()
            .textContent(error.status + ' ' + error.data)
            .textContent('usuario invalido...')
            .position('bottom right'));
        });
    }
    function getCurrentUser() {
      if (isAuthenticated()) {
      return $auth.getPayload().user;
    }else{
      return '';
    }
  }
    function isAuthenticated() {
      return $auth.isAuthenticated();
    }
    function logout() {
  if (!$auth.isAuthenticated()) {
    return;
  }
  $auth.logout()
  .then(function(){
    $location.path('/');
    $mdToast.show(
      $mdToast.simple()
        .textContent('Sesion Finalizada...')
        .position('bottom right'));
  });
}

function isAdmin() {
  if (isAuthenticated()){
    return $auth.getPayload().roles.indexOf('ADMIN') !== -1;
  }else{
    return false;
  }

}

function isUser() {
  if (isAuthenticated()){
    return $auth.getPayload().roles.indexOf('USER') !== -1;
  }else{
    return false;
  }

}   }
})();
