const { io } = require('../');

io.on('connection', (client) => {
  console.log('Usuario conectado: ', client.id);

  client.emit('enviarMensaje', {
    user: 'Admin',
    message: 'Welcome to server',
  });

  client.on('disconnect', () => {
    console.log('usuario desconectado');
  });

  // Escuchar Cliente
  client.on('enviarMensaje', (data/* , callback */) => {
    console.log(data);
    // mensajes broadcast

    client.broadcast.emit('enviarMensaje', data);

    /* if (message.user) {
      return callback({
        resp: 'TODO SALIO BIEN',
      });
    }
    return callback({
      resp: 'TODO SALIO MAL',
    }); */

    // para retroalimentacion con la web
    // callback();
  });
});
