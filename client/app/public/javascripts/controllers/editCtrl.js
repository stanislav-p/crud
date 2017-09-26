angular.module('editController', [])

.controller('editCtrl', ['$scope', '$http', '$timeout', '$location', '$routeParams', function($scope, $http, $timeout, $location, $routeParams) {

    $scope.editCompany = function(id, editData) {
        $http.put('/api/companies/' + $routeParams.id, $scope.editData).then(function() {
            $timeout(function() {
                $location.path('/companies');
            }, 1000);
        });
    };


}]);
