import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true,
})
export class User extends Document {
    @Prop({
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+([a-zA-Z0-9._%+-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        trim: true,
        lowercase: true,
      })
  email: string;

  @Prop({
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  })
  name: string;

  @Prop()
  picture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);