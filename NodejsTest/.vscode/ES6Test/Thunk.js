var thunkify = require('thunkify');

function f(a, b, callback){
  var sum = a + b;
  callback(sum);
}

(function(){
    var ft = thunkify(f);
    var print = console.log.bind(console);
    ft(1, 6)(print);
})()