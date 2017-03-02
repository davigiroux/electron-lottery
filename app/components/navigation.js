angular
.module('sorteio')
.component('navigation', {
  transclude: true,
  templateUrl: 'app/components/navigation.html',
  controller: function($rootScope) {
    this.handleAdd = function() {
      $rootScope.$broadcast('add::item');
    };
    this.handleLottery = function() {
      $rootScope.$broadcast('sorteio');
    };
  }
})