import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
type MessageBody = {
  userId: string;
  msg: string;
  projectId: string;
};

import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @WebSocketServer()
  server;
  users = 0;

  // after init
  afterInit() {
    console.log('web scoket init');
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() input: MessageBody): void {
    this.server.to(input.projectId).emit('response', input.msg);
    console.log('msg', input.msg);
    this.chatService.saveMessage({
      userId: input.userId,
      message: input.msg,
      projectId: input.projectId,
    });
  }

  // handle on connect
  handleConnection(client: Socket) {
    this.users++;
    console.log('user :>> ', client.id, ' connected');
  }

  // handle on disconnect
  handleDisconnect(client) {
    this.users--;
    console.log('user :>> ', client.id, ' disconnected');
  }

  // client join room by projectId
  @SubscribeMessage('joinRoom')
  handleJoin(Client: Socket, room: string): void {
    Client.join(room);
    console.log('join :>> ', room);
    this.server.to(room).emit('response', `user ${Client.id} join, ${room}!`);
    Client.emit('response', `join, ${room}!`);
  }

  // client leave room by projectId
  @SubscribeMessage('leaveRoom')
  handleLeave(Client: Socket, room: string): void {
    Client.leave(room);
    console.log('leave :>> ', room);
    Client.emit('response', `user ${Client.id} leave, ${room}!`);
  }
}
