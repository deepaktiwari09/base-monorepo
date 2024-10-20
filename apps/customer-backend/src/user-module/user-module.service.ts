import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../types/schema'; // Import your IUser interface
import { CreateUserModuleInput } from './dto/user-module..input';

@Injectable()
export class UserModuleService {
  constructor(
    @InjectModel('User') private userModel: Model<IUser>, // Inject the User model
  ) {}

  async create(createUserModuleInput: CreateUserModuleInput): Promise<IUser> {
    const createdUser = new this.userModel(createUserModuleInput);
    return createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<IUser> {
    return this.userModel.findById(id).exec();
  }

  // async update(id: string, updateUserModuleInput: UpdateUserModuleInput): Promise<IUser> {
  //   return this.userModel.findByIdAndUpdate(id, updateUserModuleInput, { new: true }).exec();
  // }

  async remove(id: string): Promise<IUser> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
