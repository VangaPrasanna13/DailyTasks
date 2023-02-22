// Import stylesheets
import './style.css';

// Write Javascript code!
angular.module('appModule', []);

angular.module('appModule').controller('MyController', MyController);

MyController.$inject = ['$scope'];

function MyController($scope) {
  this.$onInit = function () {
    $scope.header = 'Daily Tasks List';
  };
  $scope.loadAddWindow = function () {};
  $scope.loadViewWindow = function () {};
}
