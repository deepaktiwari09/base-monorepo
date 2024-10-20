import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModuleService } from './user-module.service';
import { UserModuleResolver } from './user-module.resolver';
import {UserSchema} from './Schemas/user-module.schema'; // Ensure correct path

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) // Register User schema
  ],
  providers: [UserModuleResolver, UserModuleService],
})
export class UserModule {}
