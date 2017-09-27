angular.module('addService', [])

.factory('Company', ['$http', function($http) {
    companyFactory = {};

    companyFactory.create = function(regData) {
        return $http.post('/api/add', regData);
    };

    return companyFactory;
}]);
