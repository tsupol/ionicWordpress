// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('main', ['ionic', 'main.controllers','ngCordova','ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
})

    .controller('sampleFacebookController',function($scope,$http,$cordovaOauth){
      $scope.facebookLogin = function(){
        $cordovaOauth.facebook("1185056838245000", ["public_profile"]).then(function(result) {
          console.log(JSON.stringify(result));
          $scope.access_token=result.access_token;
          $http.get("https://graph.facebook.com/v2.2/me?access_token="+$scope.access_token+"").success(function (response) {
            $scope.fbid = response.id;
            $scope.email = response.email;
            $scope.first_name = response.first_name;
            $scope.last_name = response.last_name;
            $scope.gender = response.gender;
            alert("Name:"+$scope.first_name+ " "+$scope.last_name+"" );
          });
        }, function(error) {
          console.log(error);
        });
      };
    });