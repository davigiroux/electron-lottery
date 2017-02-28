angular.module('sorteio').filter('reverse', function() {
  return function(items) {
    if (!items.length) return items;
    return items.slice().reverse();
  };
});