'use strict';
app.factory('customerService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var customersServiceFactory = {};

    var _getcustomers = function () {

        return $http.get(serviceBase + 'api/customers').then(function (results) {
            return results;
        });
    };

    customersServiceFactory.getcustomers = _getcustomers;


    var _putcustomers = function () {

        return $http.put(serviceBase + 'api/customers').then(function (results) {
            return results;
        });
    };

    customersServiceFactory.putcustomers = _putcustomers;


    var _deletecustomers = function (data) {
        console.log("Delete Calling");
        console.log(data.CustomerId);


        return $http.delete(serviceBase + 'api/customers/?id=' + data.CustomerId).then(function (results) {
            return results;
        });
    };

    customersServiceFactory.deletecustomers = _deletecustomers;
    customersServiceFactory.getcustomers = _getcustomers;


    return customersServiceFactory;

}]);