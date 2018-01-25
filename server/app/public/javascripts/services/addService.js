angular.module('addService', [])

    .factory('Company', ['$http', function($http) {
        companyFactory = {};

        companyFactory.create = function(regData) {
            return $http.post('/api/companies/add', regData);
        };

        return companyFactory;
    }]);
