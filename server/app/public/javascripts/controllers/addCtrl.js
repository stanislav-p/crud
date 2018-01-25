angular.module('addController', ['addService', 'companyService'])

.controller('addCtrl', ['$scope', '$http', '$location', '$timeout', 'Company', 'GetAll', function($scope, $http, $location, $timeout, Company, GetAll) {

    var self = this;

    GetAll.getAll().then(function(data) {
        $scope.data = data.data;
        return data;
    });

    this.addCompany = function(regData) {
        self.loading = true;
        self.errorMsg = false;

        Company.create(self.regData).then(function(data) {

           if (data.data.success) {
               self.loading = false;
               self.successMsg = data.data.message;
               $timeout(function(){
                   $location.path('/companies');
               }, 1000);
           } else {
               self.loading = false;
               self.errorMsg = data.data.message;
           }
        });
    }

}]);
