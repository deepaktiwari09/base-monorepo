import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserModuleInput {
  @Field()
  FirstName: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone?: string;
}
