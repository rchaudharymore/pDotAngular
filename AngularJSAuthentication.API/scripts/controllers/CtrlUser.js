'use strict';

angular.module('anguApp')
  .controller('CtrlUser',  function ($scope, $location, $timeout, $filter, $http, ngTableParams) {
      $scope.showAddUser = false;
      $scope.Add1 = true;
      $scope.Update1 = true;
      $scope.users = {};

      getdetails();
     
      function getdetails() {
          //alert("in func");
          var url = "http://localhost:26264/api/people";
          $http.get(url)
    .success(function (data) {
        console.log("printing data");
        console.log(data);
        $scope.users = data;

        })
         
          
          console.log("In Page Filtering");
          console.log($scope.users);
          var init;
          return $scope.stores = $scope.users,

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
          $scope.users = [],
          (init = function () {
              return $scope.search(), $scope.select($scope.currentPage)
          })
                    
         , function (error) {
             alert(error.data.message);
         }
                 
      }



      $scope.Cancel = function () {
          $scope.showAddUser = false;
      }


      //Add user
      $scope.AddUser = function (data) {
          $scope.Add1 = true;
          $scope.Update1 = false;
          console.log("raja");
          console.log(data);
          $scope.showAddUser = true;
          console.log("People");
          var url = "http://localhost:26264/" + "/api/People";
          var dataToPost = {
              firstName: data.firstName,
              lastName: data.lastName,
              jobTitle: data.jobTitle,
              phoneNumber: data.phone,
              url: data.url,
              email: data.email,
              activateEmail: data.activationEmail,
              emailSignature: data.textEmailSignature,
              activationEmail: data.activationEmail,
              // updatedDate: data.updatedDate,
              expirePassword: data.expirePassword,
              timeZone: data.timeZone,
              emailConfirmed: data.sendActivationEmail,
              crmUserName: data.crmUserName,
              prospects: data.prospectActivity,
              tags: data.tag

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
              $scope.showAddUser = false;
              //document.adduserform['user-form-update'].reset();
              console.log("before reset");
              document.getElementById("user-form-update").reset();
              console.log("After reset");
              ////$scope.data = '';

              ////// Reset the form model.
              ////vm.project = {};
              ////// Set back to pristine.
              ////vm.adduserform.$setPristine();
              ////// Since Angular 1.3, set back to untouched state.
              ////vm.adduserform.$setUntouched();
              //////this.users = null;
              //////this.people = null;
          })

           .error(function (data) {
               console.log("Error Got Heere is ");
               console.log(data);
               // return $scope.showInfoOnSubmit = !0, $scope.revert()
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




      $scope.callmethod = function () {

      }
      $scope.callmethod();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  
