angular
.module('sorteio')
.component('lottery', {
  templateUrl: 'app/components/lottery.html',
  controller: function($timeout, db, $rootScope){
    var $ctrl = this;
    $ctrl.delay = false;
    $ctrl.result = false;
    $ctrl.ver_sorteados = false;
    $ctrl.sorteados = [];
    $ctrl.list = [];
    $ctrl.vencedor = null;

    $ctrl.sortear = function(){
      $ctrl.ver_sorteados = false;
      $ctrl.result = false;
      var randomIndex = Math.floor(Math.random() * $ctrl.list.length);
      $ctrl.list = db.load('cadastros');
      $ctrl.vencedor = $ctrl.list[randomIndex];
      db.save($ctrl.vencedor, 'sorteados');
      $ctrl.setTimer();

    }

    $ctrl.listarSorteados = function(){
      $ctrl.sorteados = db.load('sorteados');
      $ctrl.ver_sorteados = true;
    }

    $ctrl.setTimer = function(){
      $ctrl.delay = true;
      $timeout(function(){
          $ctrl.delay = false;
          $ctrl.result = true;
    }, 1700);
};
  }
})
