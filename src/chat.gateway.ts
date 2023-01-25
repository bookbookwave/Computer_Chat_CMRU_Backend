import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
type MessageBody = {
  userId: string;
  msg: string;
};
@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server;
  users = 0;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: MessageBody): void {
    this.server.emit('message', message);
    console.log(message);
  }
  handleConnection(client) {
    this.users++;
    // Authenticate the user
    // You will need to implement your own authentication mechanism here

    // const user = authenticate(client);
    // console.log('client :>> ', client);
    console.log('user :>> ', this.users, client.id);
    // Save the user's socket ID
    // client.user = user;

    // Send a message to the client to confirm the connection
    client.emit('connection', `Welcome, ${this.users}!`);
  }
  handleDisconnection(client) {
    this.users--;
    client.emit('disconnection', `lost, ${this.users}!`);
  }
}
