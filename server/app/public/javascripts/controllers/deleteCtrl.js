angular.module('deleteController', [])

.controller('deleteCtrl', ['$http', '$scope', '$location', '$route', '$timeout', function($http, $scope, $location, $route, $timeout) {

    // var self = this;

    $scope.deleteCompany = function(id) {
        var question = confirm('Do you want to delete this company?');

        if (!question) {
            console.log('Company not deleted!');
        } else {
            $http.delete('/api/companies/' + id).then(function() {
                $timeout(function() {
                    $route.reload();
                }, 200);
            });
        }
    }
}]);