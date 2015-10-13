'use strict';
app.controller('headerController', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {


    $scope.userName = authService.authentication.userName;

  

}]);