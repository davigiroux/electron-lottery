angular
.module('sorteio')
.component('recentes', {
  templateUrl: 'app/components/recentes.html',
  bindings: {
    lista: '=',
    onRemove: '&',
    onEdit: '&'
  },
  controller: function(){ }
})