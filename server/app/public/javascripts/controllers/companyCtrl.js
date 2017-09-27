angular.module('companyController', ['companyService'])

.controller('companyCtrl', ['$scope', '$http', 'GetAll', function($scope, $http, GetAll) {

    // var self = this;

    GetAll.getAll().then(function(data) {
        // self.data = data.data;
        $scope.data = data.data;
        console.log(data.data);
        return data;
    });
}]);

