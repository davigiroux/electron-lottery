angular
.module('sorteio')
.component('recentes', {
  templateUrl: 'app/components/recentes.html',
  bindings: {
    lista: '=',
    onRemove: '&'
  },
  controller: function(){ }
})