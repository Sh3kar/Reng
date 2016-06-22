  // angular.module('starter', ['ionic'])
(function() {
angular.module('starter')
.controller('LoginController', LoginController);


function LoginController($scope, $state) {
  $scope.data = {};

  $scope.login = function() {
      console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
      $state.go('users');
     }
}
LoginController.$inject = ['$scope', '$state'];
})();
