angular
.module('sorteio')
.component('formulario', {
  templateUrl: 'app/components/formulario.html',
  bindings: {
    resolve:'<',
    close: '&',
    dismiss: '&'
  },
  controller: function() {
    var $ctrl = this;
    $ctrl.edit = false;
    $ctrl.data = {};
    $ctrl.handleSave = function() {
      $ctrl.close({$value: {
        data: $ctrl.data,
        edit: $ctrl.edit
      }});
    };
    $ctrl.handleCancel = function() {
      $ctrl.edit = false;
      $ctrl.data = {};
      $ctrl.dismiss();
    };
    $ctrl.$onChanges = function(nextObject) {
      var current = nextObject.resolve.currentValue.current;
      if (current) {
        $ctrl.edit = true;
        $ctrl.data = angular.copy(current);
      }
    };
  }
})