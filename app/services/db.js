angular
.module('sorteio')
.factory('db', function($rootScope, toastr) {
  var DEFAULT_KEY = 'sorteios';

  var db = {
    data: {}
  };

  db.load = function(key) {
    var result = localStorage.getItem(key || DEFAULT_KEY);
    result = result || '[]';
    return JSON.parse(result);
  };

  db.save = function(data, key) {
    key = key || DEFAULT_KEY;
    var result = db.load(key);
    result.push(data);
    db.persist(result, key);
    if(key == 'cadastros')
    toastr.success('Cadastro salvo!');
  };

  db.persist = function(data, key) {
    localStorage.setItem(key || DEFAULT_KEY, JSON.stringify(data));
    $rootScope.$broadcast('db::change', data);
  }

  db.remove = function(index, key) {
    key = key || DEFAULT_KEY;
    var result = db.load(key);
    result.splice(index, 1);
    db.persist(result, key);
    toastr.info('Cadastro removido!');
  };

  db.update = function(data, index, key) {
    key = key || DEFAULT_KEY;
    var result = db.load(key);
    result[index] = data;
    db.persist(result, key);
    toastr.success('Cadastro atualizado!');
  }

  return db;
});
