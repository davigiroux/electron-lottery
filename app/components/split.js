angular
.module('sorteio')
.component('split', {
  templateUrl: 'app/components/split.html',
  controller: function($rootScope, db) {
    var KEY = 'cadastros';
    var $ctrl = this;
    // lista de cadastros
    $ctrl.lista = [];

    // salva o formulario
    $ctrl.save = function(data){
      if (!data) return;
      db.save(data, KEY);
    };

    // carrega a listagem
    $ctrl.load = function() {
      $ctrl.lista = db.load(KEY);
    };
    
    // apaga o registro
    $ctrl.remove = function(index) {
      if (!confirm('Tem certeza?')) return;
      db.remove(index, KEY);
    };

    // edita um registro
    $ctrl.edit = function(index) {
      $ctrl.currentIndex = index;
      $ctrl.current = angular.copy($ctrl.lista[index]);
    };

    $ctrl.update = function(data) {
      if (!data) return;
      db.update(data, $ctrl.currentIndex, KEY);
    };

    $ctrl.$onInit = function() {
      $ctrl.load();
      $rootScope.$on('db::change', $ctrl.load);
    }
  }
})