//聊天室实体类
var Chat = function(socket) {
    this.socket = socket;
  };
  //发送消息到聊天室
  Chat.prototype.sendMessage = function(room, text) {
    var message = {
      room: room,
      text: text
    };
    this.socket.emit('message', message);
  };
  //更改聊天室
  Chat.prototype.changeRoom = function(room) {
    this.socket.emit('join', {
      newRoom: room
    });
  };
  //聊天命令处理
  Chat.prototype.processCommand = function(command) {
    var words = command.split(' ');
    var command = words[0]
                  .substring(1, words[0].length)
                  .toLowerCase();
    var message = false;
  
    switch(command) {
      case 'join':
        words.shift();
        var room = words.join(' ');
        this.changeRoom(room);
        break;
      case 'nick':
        words.shift();
        var name = words.join(' ');
        this.socket.emit('nameAttempt', name);
        break;
      default:
        message = 'Unrecognized command.';
        break;
    };
  
    return message;
  };
  