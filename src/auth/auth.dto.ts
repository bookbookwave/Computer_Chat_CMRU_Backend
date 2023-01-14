import { Field, InputType } from '@nestjs/graphql';
import { UserCreateInput } from '../@generated';

// inputLogin dto

@InputType()
export class inputLogin {
  @Field()
  email: string;
  @Field()
  password: string;
}
//
// inputRegister dto

@InputType()
export class inputRegister extends UserCreateInput {
  @Field()
  confirmPassword: string;
}
