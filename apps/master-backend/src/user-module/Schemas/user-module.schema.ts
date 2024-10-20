import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from 'src/types/schema';
import CollectionNames from 'src/Constants/collectionName'; 
import { UserType } from 'src/enum/user.enum';

// Define the user schema
export const UserSchema = new Schema<IUser>(
  {
    _id: {type: String, required: false},
    userName: { type: String, required: true },
    role: {type: String, enum:UserType},
    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false, unique: true }
  },
  {
    collection: CollectionNames.User, // Ensure CollectionNames.User is a string
  }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    const hash = await bcrypt.hash(user.password, 13);
    user.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to verify password
UserSchema.methods.verifyPassword = async function (password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.error(error);
    return false;
  }
};
