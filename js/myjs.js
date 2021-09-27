var myapp = angular.module("myApp", [])
myapp.controller("myFristCtrl", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    //routing will done latter
    $scope.role = [
        {
            value: "HR",
            Id: 1
        },
        {
            value: "IT",
            Id: 2
        },
        {
            value: "Admin",
            Id: 3
        },
        {
            value: "Oprations",
            Id: 4
        }
    ];
    $scope.person = {};
    $scope.sendForm = function () {
        saveData(JSON.stringify($scope.person))
    }
    saveData = function (data) {
        $http.post("http://localhost:3000/employee", data).then((response) => {
            if (response.data) {
                $scope.message = "record submitted Succesfully";
            }
        }, (error) => { console.log("Error Occure while savig the data" + error) });
    }
    $scope.resetForm = function(form) {
        angular.copy({},form);
        $scope.isUpadate = false;
      }
    //$scope.usersTable = new ngTableParams({}, { dataset:  $scope.userData });
    $scope.UpdateData = function (empData) {
        $scope.person.email = empData.email;
        $scope.person.password = empData.password;
        $scope.person.address = empData.address;
        $scope.person.city = empData.city;
        $scope.person.zip = empData.zip;
        $scope.person.id = empData.id;
        $scope.person.state=empData.state;
        $scope.isUpadate = true;
    }
    updatNewData=function()
    {
        alert('hi'+JSON.stringify($scope.person));
        updateUserData(JSON.stringify($scope.person));
    }
    updateUserData = function (data) {
        $http.put("http://localhost:3000/employee/" + data.id,data ).then((response) => {
            if (response.data) {
                $scope.message = "Record has been updated";
            }

        }, (error) => { console.log("error occured while updating data" + error) });
    }
    deleteData = function (id) {
        $http.delete("http://localhost:3000/employee/" + id).then((response) => {
            if (response.data)
                $scope.message = "Record Has been deleted";
        }, (error) => { console.log("Error occured during deletion" + error) });
    }
    $window.onload = function () {
        getdata();
    };
    getdata = function () {
        $http.get("http://localhost:3000/employee").then((response) => {
            if (response.data) {
                $scope.userData = response.data;
            }
        }, (error) => { console.log("Error Occure while fetching data" + error) });
    }
}]);