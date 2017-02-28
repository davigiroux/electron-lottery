angular
.module('sorteio')
.component('formulario', {
  templateUrl: 'app/components/formulario.html',
  controller: function(db) {
    var $ctrl = this;
    $ctrl.data = {};
    $ctrl.handleSave = function(e) {
      db.save($ctrl.data, 'cadastros');
    };
  }
})