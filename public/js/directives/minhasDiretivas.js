angular.module('minhasDiretivas', []).directive('meuPainel', function() {

 var ddo = {};

 ddo.restrict = 'AE';

  ddo.scope = {
    titulo:'@'
  }

 ddo.transclude = true;

 ddo.templateUrl = "js/directives/meu-painel.html";

 return ddo;
})

.directive('minhaFoto', function() {

  var ddo = {};

  ddo.restrict = 'AE';

   ddo.scope = {
     titulo:'@',
     url:'@'
   }

  ddo.transclude = false;

  ddo.templateUrl = "js/directives/minha-foto.html";

  return ddo;
})

.directive('meuBotaoPerigo', function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        nome: '@',
        acao : '&'
    }
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

    return ddo;
})

.directive('meuFocus', function() {
    var ddo = {};
    ddo.restrict = "A";
    
    ddo.link = function(scope, element) {
         scope.$on('fotoCadastrada', function() {
             element[0].focus();
         });
    };

    return ddo;
});
