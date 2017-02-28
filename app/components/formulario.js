angular
.module('sorteio')
.component('formulario', {
  templateUrl: 'app/components/formulario.html',
  bindings: {
    onSave: '&'
  },
  controller: function() {
    var $ctrl = this;
    $ctrl.data = {};
    $ctrl.handleSave = function() {
      $ctrl.onSave({data: $ctrl.data});
      $ctrl.data = {};
    }
  }
})