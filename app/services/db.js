angular
.module('sorteio')
.factory('db', function() {
  var DEFAULT_KEY = 'sorteios';

  var db = {
    data: {}
  };

  db.load = function(key) {
    var result = localStorage.getItem(key || DEFAULT_KEY);
    result = result || '[]';
    return db.data[key];
  };

  db.save = function(data, key) {
    var result = db.load(key);
    result.push(data);
    localStorage.setItem(key || DEFAULT_KEY, JSON.stringify(result));
  };

  return db;
});