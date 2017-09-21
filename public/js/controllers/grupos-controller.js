angular.module('alurapic').controller('GruposController', function($scope,$http) {

$scope.grupos = {};

  var promise = $http.get('/v1/grupos');
  promise.then(function(grupos){
    $scope.grupos = grupos.data;
  }).catch(function(erro){
    console.log(erro);
  })


});
