//基本用法
function* gen() {
  yield  123 + 456;
};

//循环
var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

function* demo() {
  console.log('Hello' + (yield 123)); // OK
};

function* demo2() {
  //foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

//让generator函数第一次调用next方法时也可以传参数
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}
//利用generator函数第为obj对象加上遍历器接口
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}
//取出嵌套数组的所有成员
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

(function(){
    // var a=gen();
    // var result=a.next();
    // console.log(result);

    // var arr = [1, [[2, 3], 4], [5, 6]];
    // for (var f of flat(arr)) {
    //     console.log(f);
    // }

    // var g=wrapper(demo);
    // var result=g().next("eee");
    // console.log(result);

    // var b = foo(5);
    // console.log(b.next()); 
    // console.log(b.next(12)); 
    // console.log(b.next(13)); 

    const tree = [ 'a', ['b', 'c'], ['d', 'e',['f','g']] ];

  for(let x of iterTree(tree)) {
    console.log(x);
  }
})()