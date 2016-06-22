(function() {
angular.module('starter')
.controller('UserController', UserController);
// function populateList($scope) {
//   $scope.itemsList = [];
//
//       // adds a new element (specified JSON object) to $scope.itemsList
//       $scope.itemsList.push({"name":"big screen TV", "room":"Basement"});
//       $scope.itemsList.push({"name":"Xbox One", "room":"Basement"});
//       $scope.itemsList.push({"name":"Ice Maker", "room":"Kitchen"});
//       $scope.itemsList.push({"name":"China Cabinet", "room":"Dining Room"});
//    }

function UserController($scope, $state) {
  $scope.data = {};
console.log("My Usrs data ");
  // $scope.login = function() {
  //     console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
  //     // $state.go('users');
  //    }

  // call function to populate list
  $scope.itemsList = [];

      // adds a new element (specified JSON object) to $scope.itemsList
      $scope.itemsList.push({"name":"big screen TV", "room":"Basement"});
      $scope.itemsList.push({"name":"Xbox One", "room":"Basement"});
      $scope.itemsList.push({"name":"Ice Maker", "room":"Kitchen"});
      $scope.itemsList.push({"name":"China Cabinet", "room":"Dining Room"});
      $scope.itemsList.push({"name":"big screen TV", "room":"Basement"});
      $scope.itemsList.push({"name":"Xbox One", "room":"Basement"});
      $scope.itemsList.push({"name":"Ice Maker", "room":"Kitchen"});
      $scope.itemsList.push({"name":"China Cabinet", "room":"Dining Room"});
      $scope.itemsList.push({"name":"big screen TV", "room":"Basement"});
      $scope.itemsList.push({"name":"Xbox One", "room":"Basement"});
      $scope.itemsList.push({"name":"Ice Maker", "room":"Kitchen"});
      $scope.itemsList.push({"name":"China Cabinet", "room":"Dining Room"});
  $scope.shouldShowDelete = false;
$scope.shouldShowReorder = false;
$scope.listCanSwipe = true;

$scope.submit = function() {
  console.log("Submit Butt");
  $state.go('submit');
}

}
UserController.$inject = ['$scope', '$state'];
})();
