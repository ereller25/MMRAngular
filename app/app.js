var mmrWebsite = angular.module('mmrWebsite', ['ngRoute']);

mmrWebsite.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })
  .when('/gallery', {
    templateUrl: 'views/gallery.html',
    controller: 'ArtworkController'
  })
  .when('/acrylic-collage', {
    templateUrl: 'views/acrylic-collage.html',
    controller: 'ArtworkController'
  })
  .when('/illustration', {
    templateUrl: 'views/illustration.html',
    controller: 'ArtworkController'
  })
  .when('/italian', {
    templateUrl: 'views/italian.html',
    controller: 'ArtworkController'
  })
  .when('/portraits', {
    templateUrl: 'views/portraits.html',
    controller: 'ArtworkController'
  })
  .when('/watercolor', {
    templateUrl: 'views/watercolor.html',
    controller: 'ArtworkController'
  })
  .when('/bio', {
    templateUrl: 'views/bio.html'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

}]);


mmrWebsite.controller('ArtworkController', ['$scope', '$http', function($scope, $http){

  $http.get('data/artworks.json').success(function(data){
    $scope.artworks = data;
  });

}]);
