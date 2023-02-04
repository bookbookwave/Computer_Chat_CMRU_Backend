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
  projectId?: string;
  messageRoomId?: string;
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
    console.log('msg', input.msg);
    console.log('input :>> ', input);
    this.chatService.saveMessage({
      userId: input.userId,
      message: input.msg,
      projectId: input.projectId ? input.projectId : undefined,
      messageRoomId: input.messageRoomId ? input.messageRoomId : undefined,
    });
    this.server
      .to(input.projectId ? input.projectId : input.messageRoomId)
      .emit('response', { msg: input.msg, userId: input.userId });
  }
  @SubscribeMessage('fileUpload')
  handleFileUploadMessage(@MessageBody() input: MessageBody): void {
    // console.log('msg', input.msg);
    console.log('input :>> ', input);
    this.chatService.saveMessage({
      userId: input.userId,
      message: input.msg,
      projectId: input.projectId ? input.projectId : undefined,
      messageRoomId: input.messageRoomId ? input.messageRoomId : undefined,
    });
    this.server
      .to(input.projectId ? input.projectId : input.messageRoomId)
      .emit('response', { msg: input.msg, userId: input.userId });
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

    // TODO : Emit Check Error message >>>>
    // this.server.to(room).emit('response', { msg: `Server: Now you Join Room` });

    // this.server
    //   .to(room)
    //   .emit('response', { msg: `user ${Client.id} join, ${room}!` });
    // Client.emit('response', { msg: `join, ${room}!` });
  }

  // client leave room by projectId
  @SubscribeMessage('leaveRoom')
  handleLeave(Client: Socket, room: string): void {
    Client.leave(room);
    console.log('leave :>> ', room);
    // Client.emit('response', { msg: `user ${Client.id} leave, ${room}!` });
  }
}
