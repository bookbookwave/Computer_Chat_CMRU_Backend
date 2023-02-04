import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MessageRoom } from 'src/@generated';
import { MessageRoomService } from './message-room.service';

@Resolver()
export class MessageRoomResolver {
  constructor(private readonly messageRoomService: MessageRoomService) {}

  @Query((returns) => MessageRoom)
  async messageRoom(@Args('id') id: string): Promise<MessageRoom> {
    return this.messageRoomService.findRoom(id);
  }
  @Query((returns) => [MessageRoom])
  async messageRooms(): Promise<MessageRoom[]> {
    return this.messageRoomService.getRoom();
  }
  @Mutation((returns) => MessageRoom)
  async createMessageRoom(): Promise<MessageRoom> {
    return this.messageRoomService.createRoom();
  }
  // @Mutation((returns) => MessageRoom)
  // async updateRoom(
  //   @Args('input') input: MessageRoomUncheckedCreateInput,
  // ): Promise<MessageRoom> {
  //   return this.messageRoomService.updateRoom(input);
  // }
  @Mutation((returns) => Boolean)
  async deleteMessageRoom(@Args('id') id: string): Promise<boolean> {
    return this.messageRoomService.deleteRoom(id);
  }
}
