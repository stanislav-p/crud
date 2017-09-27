angular.module('companyService', [])

    .factory('GetAll', ['$http', function($http) {
        getAllFactory = {};

        getAllFactory.getAll = function() {
            return $http.get('/api/companies');
        };

        return getAllFactory;
    }]);
