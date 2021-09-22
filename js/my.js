var myApp = angular.module('myngapp', []);
myApp.controller('myController', function ($scope) {
    $scope.title = "Home Index";
    $scope.message = "Hello This is my Controller";
    $scope.showMessage = function () {
        alert('this is a frist click');
    }
});