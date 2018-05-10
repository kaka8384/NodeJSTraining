(function(){
  function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done55');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

})()

