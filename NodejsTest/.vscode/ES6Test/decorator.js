class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

(function(){
    const math = new Math();
    
    // passed parameters should get logged now
    math.add(2, 4);
    //console.log([,'a','b',,].copyWithin(2,0));
  })()
  


  
