import { Document } from 'mongoose';

export interface TaskInterface extends Document {
  title: string;
  content: string;
  createdAt?: string;
  updateAt?: string;
}
