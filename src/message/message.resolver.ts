import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message, MessageUncheckedCreateInput } from 'src/@generated';
import { MessageService } from './message.service';

@Resolver()
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query((returns) => Message)
  async message(@Args('id') id: string): Promise<MessageUncheckedCreateInput> {
    return this.messageService.findMessage(id);
  }
  @Query((returns) => [Message])
  async messages(): Promise<MessageUncheckedCreateInput[]> {
    return this.messageService.getMessages();
  }
  @Mutation((returns) => Message)
  async createMessage(
    @Args('input') input: MessageUncheckedCreateInput,
  ): Promise<MessageUncheckedCreateInput> {
    return this.messageService.createMessage(input);
  }
  @Mutation((returns) => Message)
  async updateMessage(
    @Args('input') input: MessageUncheckedCreateInput,
  ): Promise<MessageUncheckedCreateInput> {
    return this.messageService.updateMessage(input);
  }
  @Mutation((returns) => Boolean)
  async deleteMessage(@Args('id') id: string): Promise<boolean> {
    return this.messageService.deleteMessage(id);
  }
}
