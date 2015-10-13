'use strict';
app.factory('categorysService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var categorysServiceFactory = {};

    var _getcategorys = function () {

        return $http.get(serviceBase + 'api/Categorys').then(function (results) {
            return results;
        });
    };

    categorysServiceFactory.getcategorys = _getcategorys;



    var _putcategorys = function () {

        return $http.put(serviceBase + 'api/Categorys').then(function (results) {
            return results;
        });
    };

    categorysServiceFactory.putcategorys = _putcategorys;




    var _deletecategorys = function (data) {
        console.log("Delete Calling");
        console.log(data.CategoryID);


        return $http.delete(serviceBase + 'api/Categorys/?id=' + data.CategoryID).then(function (results) {
            return results;
        });
    };

    categorysServiceFactory.deletecategorys = _deletecategorys;
    categorysServiceFactory.getcategorys = _getcategorys;





    return categorysServiceFactory;

}]);