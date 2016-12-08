  angular.module('main.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
    $scope.loginData.username = "";
    $scope.loginData.password = "";
  });

  // Form data for the login modal
  $scope.loginData = {};



  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);
      var packdata = {
          username : $scope.loginData.username,
          password : $scope.loginData.password
      }
      if(packdata.username=="admin" && packdata.password=="1234"){
        $state.go('app.playlists');
      }else{
        alert('คุณไม่ใช่สมาชิก');
      }

  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.singleData = $stateParams;
})

  .controller('MapControl', function($scope,$cordovaGeolocation) {
      setTimeout(function () {
          showMap();
          var map;
          function showMap() {
              map = new google.maps.Map(document.getElementById('map'), {
                  center: {lat: -34.397, lng: 150.644},
                  zoom: 8
              });
          }
      },500);
     /* var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
              var lat  = position.coords.latitude
              var long = position.coords.longitude
              alert('Lat:'+lat+"Long:"+long);
          }, function(err) {
              // error
              alert('NO');
          });*/
  });