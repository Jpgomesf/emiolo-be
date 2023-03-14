import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(email: string, name: string, photo: string): Promise<User> {
    const user = new this.userModel({
      email,
      name,
      photo,
    });

    return await user.save();
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}