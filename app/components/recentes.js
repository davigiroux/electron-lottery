angular
.module('sorteio')
.component('recentes', {
  templateUrl: 'app/components/recentes.html',
  controller: function(db){
    var $ctrl = this;
    db.load('cadastros');
    $ctrl.lista = db.data.cadastros;
  }
})