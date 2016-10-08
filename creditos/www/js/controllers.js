angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


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
})

.controller('LoginCtrl', function($scope, $state, $ionicModal){

    $scope.loginData = {};
    $scope.estado = 'login';

    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);
        $state.go('app.search');
    };

    $scope.ResetearClave = function(){
        alert("Resetear Clave");
    }

    $scope.Logout = function() {
        alert("Salir");
    };
})