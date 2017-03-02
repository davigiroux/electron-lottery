angular
.module('sorteio')
.component('split', {
  templateUrl: 'app/components/split.html',
  controller: function($rootScope, $uibModal, db) {
    
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
    $ctrl.remove = function(item) {
      if (!confirm('Tem certeza?')) return;
      db.remove($ctrl.lista.indexOf(item), KEY);
    };

    // edita um registro
    $ctrl.edit = function(item) {
      $ctrl.currentIndex = $ctrl.lista.indexOf(item);
      $ctrl.current = angular.copy(item);
      $ctrl.show();
    };

    $ctrl.update = function(data) {
      if (!data) return;
      db.update(data, $ctrl.currentIndex, KEY);
    };

    $ctrl.show = function() {
      var resolve = null;
      if ($ctrl.current) resolve = {current: $ctrl.current};

      var modalInstance = $uibModal.open({
        animation: false,
        component: 'formulario',
        resolve: resolve
      });

      modalInstance.result.then(function (result) {
        if (result.edit) {
          $ctrl.update(result.data);
        } else {
          $ctrl.save(result.data);
        }
      }, function () {});
    };

    $ctrl.showSorteio = function() {
      var resolve = null;
      if ($ctrl.current) resolve = {current: $ctrl.current};

      var modalInstance = $uibModal.open({
        animation: false,
        component: 'lottery',
        resolve: resolve
      });

      modalInstance.result.then(function (result) {
        if (result.edit) {
          $ctrl.update(result.data);
        } else {
          $ctrl.save(result.data);
        }
      }, function () {});
    };

    $ctrl.$onInit = function() {
      $ctrl.load();
      $rootScope.$on('db::change', $ctrl.load);
      $rootScope.$on('add::item', function() {
        $ctrl.current = null;
        $ctrl.currentIndex = null;
        $ctrl.show();
      });
      $rootScope.$on('sorteio', function() {
        $ctrl.showSorteio();
      });
    }
  }
})