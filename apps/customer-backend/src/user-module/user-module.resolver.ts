import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserModuleService } from './user-module.service';
import { CreateUserModuleInput } from './dto/user-module..input';
// import { IUser } from 'src/types/schema'; // import user type
import { IUser } from '../types/schema'; // assuming you have a GraphQL entity for User
import { userResponse } from './user-module.response.schema.ts/user_module.responseShema';

@Resolver('UserModule')
export class UserModuleResolver {
  constructor(private readonly userModuleService: UserModuleService) {}

  // Mutation to create a user
  @Mutation(() => userResponse)  // Specify the return type here
  async create(@Args('createUserModuleInput') createUserModuleInput: CreateUserModuleInput): Promise<IUser> {
    return this.userModuleService.create(createUserModuleInput);
  }

  // Query to get all users
  @Query(() => [userResponse])  // Specify that it returns an array of User entities
  async findAll(): Promise<IUser[]> {
    return this.userModuleService.findAll();
  }

  // Query to get one user by ID
  @Query(() => userResponse)  // Specify the return type as User
  async findOne(@Args('id') id: string): Promise<IUser> {
    return this.userModuleService.findOne(id);
  }

  // Mutation to remove a user
  @Mutation(() => userResponse)  // Specify the return type as User
  async remove(@Args('id') id: string): Promise<IUser> {
    return this.userModuleService.remove(id);
  }
}
