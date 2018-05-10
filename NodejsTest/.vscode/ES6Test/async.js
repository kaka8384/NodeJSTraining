async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了');
    });
  } catch(e) {
  }
  return await('hello world');
};

(function(){
    f().then(v=>console.log(v)).catch(e => console.log(e));
})()