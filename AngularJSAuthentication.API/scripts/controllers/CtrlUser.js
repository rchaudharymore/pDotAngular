'use strict';

/**
 * @ngdoc function
 * @name anguApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anguApp
 */
angular.module('anguApp')
  .controller('CtrlUser',  function (peoplesService,$scope, $location, $timeout, $filter, $http, ngTableParams) {
      $scope.showAddUser = false;
      $scope.currentPageStores = {};
      $scope.Add1 = true;
      $scope.Update1 = true;
      $scope.user = [];

      peoplesService.getpeoples().then(function (results) {
          console.log("hiiiiii");
          console.log(results);
          $scope.users = results.data;

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
              $scope.currentPageStores = [],
              (init = function () {
                  return $scope.search(), $scope.select($scope.currentPage)
              })

          ()

      }, function (error) {
          //alert(error.data.message);
      }






      );



      //delete people
      $scope.Delete = function (data) {
          console.log("Delete Calling");
          console.log(data);
          alert(data);

          return $http.delete("http://localhost:26264/" + 'api/people?email=' + data).then(function (results) {
              return results;
          });
      };


      //Edit people
      $scope.Edit = function (data) {
          $scope.Add1 = false;
          $scope.Update1 = true;
          console.log("Edit Calling");
          $scope.showAddUser = true;
          //$scope.hideSubmit = true;
          console.log(data);
          $scope.people = data;
         

      };
      $scope.updateUser = function (data) {
          console.log("in update user");
        
          peoplesService.putpeoples(data).then(function (data) {
              console.log("After calling putpeople service");
              console.log(data);
          });
          

      }   
      





      $scope.AddUser = function (data)
      {
          $scope.Add1 = true;
          $scope.Update1 = false;
          console.log("raja");
          console.log(data);
          $scope.showAddUser = true;
          console.log("People");
          var url = "http://localhost:26264/" + "/api/people";
          var dataToPost = { 
              firstName: data.firstName,
              lastName: data.lastName,
              jobTitle: data.jobTitle,
              phoneNumber: data.phone,
              url:data.url,
              email:data.email,
              activateEmail: data.activationEmail,
              emailSignature :data.textEmailSignature,            
              activationEmail: data.activationEmail,
              // updatedDate: data.updatedDate,
              expirePassword: data.expirePassword,
              timeZone: data.timeZone,
              emailConfirmed:data.sendActivationEmail,
              crmUserName:data.crmUserName,
              prospects: data.prospectActivity,
              tags: data.tag

              //data.sendWeeklySearchMarketing,
              //data.sendEmailAssignedProspect,
              //data.excludeProspect,
             
              //data.limitEmailSending,
              //data.limitProspectExport,
              //data.limitProspectImport,
              //tags:data.tag,
              //role:data.role,
              //data.sendDailyProspectsAssE,
              //data.allVisitors,
              //data.sendDailyVisitorActivityE,
              //data.sendStarredProspectA,
              //data.filterVisitor, 
              
               
              
          
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
                  //console.log(data);
                  //  console.log(data);
                  $modalInstance.close(data);
              }
              peoplesServiceFactory.getpeoples = _getpeoples;
          })

           .error(function (data) {
               console.log("Error Got Heere is ");
               console.log(data);
               // return $scope.showInfoOnSubmit = !0, $scope.revert()
           })
      }


      $scope.Cancel = function ()
      {
          $scope.showAddUser = false;
      }



      

      $scope.callmethod = function () {

      }
      $scope.callmethod();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });


//app.controller("CtrlUser", ["$scope", '$http', 'ngAuthSettings', "datasService", "$modalInstance", function ($scope, $http, ngAuthSettings, peoplesService, $modalInstance) {
//    console.log("Add People");

//    $scope.PeopleData = {

//    };
//    if (people) {
//        console.log("People if conditon");

//        $scope.PeopleData = people;

//        console.log($scope.PeopleData.PeopleName);
//        //console.log($scope.ProjectData.Description);
//    }
//    $scope.ok = function () { $modalInstance.close(); },
//    $scope.cancel = function () { $modalInstance.dismiss('canceled'); },

//     $scope.AddPeople = function (data) {


//         console.log("People");
//         var url = serviceBase + "/api/Peoples";
//         var dataToPost = { PeopleFirstName: $scope.PeopleData.PeopleFirstName, PeopleLastName: $scope.PeopleData.PeopleLastName, CreatedDate: $scope.PeopleData.CreatedDate, UpdatedDate: $scope.PeopleData.UpdatedDate, CreatedBy: $scope.PeopleData.CreatedBy, UpdateBy: $scope.PeopleData.UpdateBy, Email: $scope.PeopleData.Email, Department: $scope.PeopleData.Department, BillableRate: $scope.PeopleData.BillableRate, CostRate: $scope.PeopleData.CostRate, Permissions: $scope.PeopleData.Permissions, Type: $scope.PeopleData.Type };
//         console.log(dataToPost);

//         $http.post(url, dataToPost)
//         .success(function (data) {

//             console.log("Error Gor Here");
//             console.log(data);
//             if (data.id == 0) {

//                 $scope.gotErrors = true;
//                 if (data[0].exception == "Already") {
//                     console.log("Got This User Already Exist");
//                     $scope.AlreadyExist = true;
//                 }

//             }
//             else {
//                 //console.log(data);
//                 //  console.log(data);
//                 $modalInstance.close(data);
//             }

//         })
//          .error(function (data) {
//              console.log("Error Got Heere is ");
//              console.log(data);
//              // return $scope.showInfoOnSubmit = !0, $scope.revert()
//          })
//     };

//    $scope.PutPeople = function (data) {
//        $scope.PeopleData = {

//        };
//        if (people) {
//            $scope.PeopleData = people;
//            console.log("found Puttt People");
//            console.log(people);
//            console.log($scope.PeopleData);
//            //console.log($scope.Customer.name);
//            //console.log($scope.Customer.description);
//        }
//        $scope.ok = function () { $modalInstance.close(); },
//    $scope.cancel = function () { $modalInstance.dismiss('canceled'); },

//        console.log("Update People");
//        var url = serviceBase + "/api/Peoples";
//        var dataToPost = { PeopleID: $scope.PeopleData.PeopleID, PeopleFirstName: $scope.PeopleData.PeopleFirstName, PeopleLastName: $scope.PeopleData.PeopleLastName, CreatedDate: $scope.PeopleData.CreatedDate, UpdatedDate: $scope.PeopleData.UpdatedDate, CreatedBy: $scope.PeopleData.CreatedBy, UpdateBy: $scope.PeopleData.UpdateBy, Email: $scope.PeopleData.Email, Department: $scope.PeopleData.Department, BillableRate: $scope.PeopleData.BillableRate, CostRate: $scope.PeopleData.CostRate, Permissions: $scope.PeopleData.Permissions, Type: $scope.PeopleData.Type, ImageUrl: data.ImageUrl };
//        console.log(dataToPost);


//        $http.put(url, dataToPost)
//        .success(function (data) {

//            console.log("Error Gor Here");
//            console.log(data);
//            if (data.id == 0) {

//                $scope.gotErrors = true;
//                if (data[0].exception == "Already") {
//                    console.log("Got This User Already Exist");
//                    $scope.AlreadyExist = true;
//                }

//            }
//            else {
//                $modalInstance.close(data);
//            }

//        })
//         .error(function (data) {
//             console.log("Error Got Heere is ");
//             console.log(data);

//             // return $scope.showInfoOnSubmit = !0, $scope.revert()
//         })

//    };

//}])
