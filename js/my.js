var myApp = angular.module('myngapp', []);
myApp.controller('myController', function ($scope, $http) {
    $scope.title = "Home Index";
    $scope.message = "Hello This is my Controller";
    $scope.showMessage = function () {
        alert('this is a frist click');
    }
    var onSuccees = function (data, status, header, config) {
        $scope.data = data;
    }
    var onError = function (data, status, header, config) {
        $scope.error = status;
    }
    $http.get(' http://localhost:3000/posts').then(function (response) {
        var data = response.data;
        $scope.user = data;
    });

});
