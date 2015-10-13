'use strict';
app.factory('expensesService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var expensesServiceFactory = {};

    var _getexpenses = function () {

        return $http.get(serviceBase + 'api/Expenses').then(function (results) {
            return results;
        });
    };

    expensesServiceFactory.getexpenses = _getexpenses;



    var _putexpenses = function () {

        return $http.put(serviceBase + 'api/Expenses').then(function (results) {
            return results;
        });
    };
    expensesServiceFactory.putexpenses = _putexpenses;




    var _deleteexpenses = function (data) {
        console.log("Delete Calling");
        console.log(data.ExpenseID);


        return $http.delete(serviceBase + 'api/Expenses/?id=' + data.ExpenseID).then(function (results) {
            return results;
        });
    };

    expensesServiceFactory.deleteexpenses = _deleteexpenses;
    expensesServiceFactory.getexpenses = _getexpenses;

    return expensesServiceFactory;

}]);