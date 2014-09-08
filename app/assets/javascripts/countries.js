(function(){

  var app = angular.module("skiApp", []);

  app.controller("SkiController", ["$scope", "$http", function($scope, $http){

    countries = []
    $scope.countries = countries

    $http.get("/countries.json").success(function(data){
      $scope.countries = data
    })

    $scope.addCountry = function(){
      $http.post("/countries.json", {country: $scope.newCountry}).success(function(data){
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

})();