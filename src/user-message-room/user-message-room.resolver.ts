import {
  Args,
  Query,
  Resolver,
  Mutation,
  InputType,
  Field,
} from '@nestjs/graphql';
import {
  UserMessageRoom,
  UserMessageRoomCreateManyInput,
  UserMessageRoomUncheckedCreateInput,
} from 'src/@generated';
import { UserMessageRoomService } from './user-message-room.service';

@InputType()
class InputRooms {
  @Field((type) => [UserMessageRoomCreateManyInput])
  data: [UserMessageRoomCreateManyInput];
}
@Resolver()
export class UserMessageRoomResolver {
  constructor(private readonly UserMessageRoom: UserMessageRoomService) {}

  @Query((returns) => [UserMessageRoom])
  async findMessageRoomByRoomId(
    @Args('id') id: string,
  ): Promise<UserMessageRoom[]> {
    return this.UserMessageRoom.findMessageRoomByRoomId(id);
  }

  @Query((returns) => [UserMessageRoom])
  async findMessageRoomByUserId(
    @Args('id') id: string,
  ): Promise<UserMessageRoom[]> {
    return this.UserMessageRoom.findMessageRoomByUserId(id);
  }
  @Query((returns) => [UserMessageRoom])
  async findMessageRoomByUserIdAndRoomId(): Promise<UserMessageRoom[]> {
    return this.UserMessageRoom.findMessageRoomByUserIdAndRoomId();
  }
  @Query((returns) => [UserMessageRoom])
  async findMessageRoomByUserIdAndGetUserId(
    @Args('id') id: string,
  ): Promise<any> {
    return this.UserMessageRoom.findMessageRoomByUserIdAndGetUserId(id);
  }
  @Mutation((returns) => UserMessageRoom)
  async createUserMessageRoom(
    @Args('input') input: UserMessageRoomUncheckedCreateInput,
  ): Promise<UserMessageRoom> {
    return this.UserMessageRoom.createMessageRoom(input);
  }
  @Mutation((returns) => Boolean)
  async createManyUserMessageRoom(
    @Args('input') input: InputRooms,
  ): Promise<boolean> {
    return await this.UserMessageRoom.createManyUserMessageRoom(input.data);
  }
  @Mutation((returns) => UserMessageRoom)
  async updateUserMessageRoom(
    @Args('input') input: UserMessageRoomUncheckedCreateInput,
  ): Promise<UserMessageRoom> {
    return this.UserMessageRoom.updateMessageRoom(input);
  }
  @Mutation((returns) => Boolean)
  async deleteUserMessageRoom(@Args('id') id: string): Promise<boolean> {
    return this.UserMessageRoom.deleteMessageRoom(id);
  }
}
function InputTyqpe() {
  throw new Error('Function not implemented.');
}
