import { createTask, deleteTask } from '../';
import { TaskInterface } from '../interface';

export const taskMutations = {
  createTask: async (_root: any, values: TaskInterface) => {
    try {
      const task = await createTask(values);
      return task;
    } catch (err) {
      throw new Error(err);
    }
  },
  deleteTask: async (_root: any, values: { id: string }) => {
    try {
      const task = await deleteTask(values);
      const response = task
        ? 'Succesfully deleted'
        : new Error('ID not founded');
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};
