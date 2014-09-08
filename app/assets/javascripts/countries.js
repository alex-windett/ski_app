(function(){

  var app = angular.module("skiApp", []);

  app.controller("SkiController", ["$scope", "$http", function($scope, $http){

    $scope.countries = countries
    $scope.selectedCountry = countries[0]

    $http.get("/countries.json").success(function(data){
      $scope.countries = data
    })

    $scope.addCountry = function(){
      $http.post("/countries.json", {student: $scope.newCountry}).success(function(data){
        $scope.countries.push($scope.newCountry)
        $scope.newCountry = false
        $scope.countryForm.$setPristine
      });
    }

    $scope.selectCountry = function(country){
      $scope.selectedCountry = country;
    }

    $scope.hideCountry = function(country){
      scope.selectedCountry = []
    }

  }]);


  countries = [

    {
      name: "France",
    },
     {
      name: "Germany",
    },
     {
      name: "England",
    },
     {
      name: "Italy",
    },

  ]

})();