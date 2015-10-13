'use strict';

/**
 * @ngdoc function
 * @name anguApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anguApp
 */
angular.module('anguApp')
  .controller('CtrlGroup', function ($scope, $location, $timeout, $filter, $http, ngTableParams) {
      $scope.showUserGroup = false;
      $scope.currentPageStores = {};
     
      $scope.AddUser = function () {
          $scope.showUserGroup = true;
      }
      $scope.Cancel = function () {
          $scope.showUserGroup = false;
      }
      $scope.callmethod = function () {

          var init;
          return $scope.stores = $scope.group,

              $scope.searchKeywords = "",
              $scope.filteredStores = [],
              $scope.row = "",

              $scope.select = function (page) {
                  var end, start; console.log("select"); console.log($scope.stores);
                  return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
              },

              $scope.onFilterChange = function () {
                  console.log("onFilterChange"); console.log($scope.stores);
                  return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
              },

              $scope.onNumPerPageChange = function () {
                  console.log("onNumPerPageChange"); console.log($scope.stores);
                  return $scope.select(1), $scope.currentPage = 1
              },

              $scope.onOrderChange = function () {
                  console.log("onOrderChange"); console.log($scope.stores);
                  return $scope.select(1), $scope.currentPage = 1
              },

              $scope.search = function () {
                  console.log("search");
                  console.log($scope.stores);
                  console.log($scope.searchKeywords);

                  return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
              },

              $scope.order = function (rowName) {
                  console.log("order"); console.log($scope.stores);
                  return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
              },

              $scope.numPerPageOpt = [3, 5, 10, 20],
              $scope.numPerPage = $scope.numPerPageOpt[2],
              $scope.currentPage = 1,
              $scope.currentPageStores = [],
              (init = function () {
                  return $scope.search(), $scope.select($scope.currentPage)
              })

          ()


      }
      $scope.callmethod();
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

  });
