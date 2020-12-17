import { Schema, model } from 'mongoose';

import { TaskInterface } from './interface';

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<TaskInterface>('Task', TaskSchema);
