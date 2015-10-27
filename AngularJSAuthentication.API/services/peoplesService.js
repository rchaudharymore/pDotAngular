'use strict';
anguApp.factory('peoplesService', ['$http', function ($http) {

    var serviceBase = "http://localhost:26264/";

    var peoplesServiceFactory = {};


  

    var _getaccounts = function () {
        console.log("calling get Accounts");
        return $http.get(serviceBase + 'api/Accounts').then(function (results) {
            return results;
        });
    };


   

    var _getgroups = function () {
        console.log("calling get Groups");
        return $http.get("http://localhost:26264/" + 'api/Groups').then(function (results) {
            return results;
        });
    };


    peoplesServiceFactory.getgroups = _getgroups;



    var _putpeoples = function (data) {
        //$scope.results = results;
        console.log("I m in people Servies");
        console.log(data);
        return $http.put("http://localhost:26264/" + 'api/people',data).then(function (results) {
            return results;
           
        });
    };

    peoplesServiceFactory.putpeoples = _putpeoples;




    var _deletepeoples = function (data) {
        console.log("Delete Calling");
        console.log(data.PeopleID);


        return $http.delete(serviceBase + 'api/People/?id=' + data.PeopleID).then(function (results) {
            return results;
        });
    };

    peoplesServiceFactory.deletepeoples = _deletepeoples;
    peoplesServiceFactory.getpeoples = _getpeoples;





    return peoplesServiceFactory;

}]);