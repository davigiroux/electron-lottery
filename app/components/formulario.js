angular
.module('sorteio')
.component('formulario', {
  templateUrl: 'app/components/formulario.html',
  bindings: {
    current:'<',
    onSave: '&',
    onUpdate: '&'
  },
  controller: function() {
    var $ctrl = this;
    $ctrl.edit = false;
    $ctrl.data = {};
    $ctrl.handleSave = function() {
      if ($ctrl.edit) {
        $ctrl.onUpdate({data: $ctrl.data});
        $ctrl.edit = false;
      } else {
        $ctrl.onSave({data: $ctrl.data});
      }
      $ctrl.data = {};
    };
    $ctrl.handleCancel = function() {
      $ctrl.edit = false;
      $ctrl.data = {};
    };
    $ctrl.$onChanges = function(nextObject) {
      if (nextObject.current.currentValue) {
        $ctrl.edit = true;
        $ctrl.data = nextObject.current.currentValue;
      }
    };
  }
})