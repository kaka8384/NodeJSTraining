(function(){
    let log={};
    log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};

  console.log(log.levels.DEBUG);
})()