'use strict';

angular.module('anguApp')
  .controller('CtrlGroup', function ( $scope, $location, $timeout, $filter, $http, ngTableParams) {
      $scope.showAddGroup = false;

      console.log("I am in Ctrl Group");
      getdetails();
      $scope.Groups = {};
      function getdetails() {
          var url = "http://localhost:26264/api/Groups";
          $http.get(url)
    .success(function (data) {
        console.log("printing data");
        console.log(data);
        $scope.Groups = data;
        
     })
          console.log("In Page Filtering");
          console.log($scope.Groups);
          var init;
          return $scope.stores = $scope.Groups,

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
          $scope.Groups = [],
          (init = function () {
              return $scope.search(), $scope.select($scope.currentPage)
          })
                    
         , function (error) {
             alert(error.data.message);
         }
                 
      }
        //Cancel function
        $scope.Cancel = function () {
              $scope.showAddGroup = false;
          }

        //Add user
        $scope.AddGroup = function (data) {
            $scope.Add1 = true;
            $scope.Update1 = false;
            console.log("i am in Add Group");
            console.log(data);
            $scope.showAddGroup = true;
            console.log("Group");
            var url = "http://localhost:26264/api/Groups";
            var dataToPost = {
                name: data.name,
                tags:data.tags
              
              
            };
            console.log(dataToPost);

            $http.post(url, dataToPost)
            .success(function (data) {

                console.log("Error Gor Here");
                console.log(data);
                if (data.id == 0) {

                    $scope.gotErrors = true;
                    if (data[0].exception == "Already") {
                        console.log("Got This User Already Exist");
                        $scope.AlreadyExist = true;
                    }

                }
                else {

                    console.log(data+"Is not inserted");
                }
                getdetails();
                $scope.showAddGroup = false;
                console.log("before reset");
                document.getElementById("user-form-update").reset();
                console.log("After reset");
              })

             .error(function (data) {
                 console.log("Error Got Heere is ");
                 console.log(data);
               })
        }

        //Edit people
        $scope.Edit = function (data) {
            $scope.Add1 = false;
            $scope.Update1 = true;
            console.log("Edit Calling");
            $scope.showAddUser = true;
            console.log(data);
            $scope.people = data;
            console.log("I m in people Servies");
            console.log(data);
            return $http.put("http://localhost:26264/" + 'api/people', data).then(function (results) {
                return results;
                getdetails();
                $scope.showAddUser = false;
                document.getElementById("user-form-update").reset();
            });


        };

        $scope.updateUser = function (data) {
            console.log("in update user");

          
            console.log("After calling putpeople service");
            console.log(data);
            return $http.put("http://localhost:26264/" + 'api/people', data).then(function (results) {
             
                $scope.showAddUser = false;
                document.getElementById("user-form-update").reset();
                console.log("after on update");
                return results;

            });
          
          


        }

        //delete people
        $scope.Delete = function (data) {
            console.log("Delete Calling");
            console.log(data);
            alert(data);

            return $http.delete("http://localhost:26264/" + 'api/people?email=' + data).then(function (results) {
                getdetails();
                $scope.showAddUser = false;
                return results;
             
            });
        
        }
     
});

