import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class userResponse {
  @Field()
  _id: string;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phone: string;
}