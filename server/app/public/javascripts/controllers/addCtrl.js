angular.module('addController', ['addService'])

.controller('addCtrl', ['$http', '$location', '$timeout', 'Company', function($http, $location, $timeout, Company) {

    var self = this;

    this.addCompany = function(regData) {
        self.loading = true;
        self.errorMsg = false;

        Company.create(self.regData).then(function(data) {
           // console.log(data.data.success);
           // console.log(data.data.message);

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
