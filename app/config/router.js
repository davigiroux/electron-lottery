angular
.module('sorteio')
.config(function($stateProvider, $urlRouterProvider) {
  
  var splitState = {
    name: 'split',
    url: '/',
    template: '<split></split>'
  };

  var listState = {
    name: 'list',
    url: '/list',
    template: '<list></split>'
  };

  $urlRouterProvider.otherwise('/');

  $stateProvider.state(splitState);
  $stateProvider.state(listState);
});