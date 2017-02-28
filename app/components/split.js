angular
.module('sorteio')
.component('split', {
  templateUrl: 'app/components/split.html',
  controller: function($rootScope, db) {
    var $ctrl = this;
    // lista de cadastros
    $ctrl.lista = [];

    // salva o formulario
    $ctrl.save = function(data){
      if (!data) return;
      db.save(data, 'cadastros');
    };

    // carrega a listagem
    $ctrl.load = function() {
      $ctrl.lista = db.load('cadastros');
    };
    
    // apaga o registro
    $ctrl.remove = function(index) {
      if (!confirm('Tem certeza?')) return;
      db.remove(index, 'cadastros');
    };

    $ctrl.$onInit = function() {
      $ctrl.load();
      $rootScope.$on('db::change', $ctrl.load);
    }
  }
})