var myapp = angular.module("myApp", [])
myapp.controller("myFristCtrl",['$scope',function ($scope) {
    $scope.person = {};
    $scope.role = [
        {
            value:"HR",
            Id:1
        },
        {
            value:"IT",
            Id:2
        },
        {
            value:"Admin",
            Id:3
        },
        {
            value:"Oprations",
            Id:4
        }
    ];
   
    $scope.sendForm=function(){
console.log(JSON.stringify($scope.person));
    }

}]);