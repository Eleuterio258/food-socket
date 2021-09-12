import 'package:socket_io_client/socket_io_client.dart';

void main() {
  var socket = io(
      'http://localhost:5000',
      OptionBuilder()
          .setTransports(['websocket'])
          .disableAutoConnect()
          .build());
  socket.connect();

  socket.on('connect', (_) {
    print('connected');
    var msg = 'CLIENTE DART';
    socket.on('msg', (msg) => {});
  });

  socket.on('disconnect', (_) {
    var msg = 'CLIENTE DART SAIU';
    socket.emit('msg', msg);
    print('SERVIDOR OFFLINE');
  });
}
