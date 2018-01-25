angular.module('companyController', ['companyService'])

.controller('companyCtrl', ['$scope', '$http', 'GetAll', function($scope, $http, GetAll) {

    // Counting sum of children's companies and the main one.
    $scope.getTotal = function(company) {
        var total = company.earnings;

        for(var i = 0; i < company.children.length; i++) {
            total += company.children[i].earnings;
        }

        return total;
    }

    // Getting All Companies
    GetAll.getAll().then(function(data) {
        $scope.data = data.data;
        return data;
    });

    // $scope.total = function(company) {
    //     var total = company.earnings;
    //
    //     GetOne.getOne().then(function(data) {
    //         return $scope.data.earnings += company.earnings;
    //     });
    // }



}]);

