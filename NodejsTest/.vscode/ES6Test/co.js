var co = require('co');
//var fs = require('fs');

var gen = function* () {
  var f1 = yield  1;  
  var f2 = yield 2;
  console.log(f1.toString());
  console.log(f2.toString());
};



(function(){
    co(gen).then(function (){
        console.log('Generator 函数执行完成');
    });
})()