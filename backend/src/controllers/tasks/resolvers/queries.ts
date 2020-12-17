import { getTask, getTasks } from '../';

export const taskQueries = {
  getTask: async (_root: any, value: { id: string }) => {
    try {
      const task = await getTask(value);
      if (!task) {
        throw new Error('Task not found');
      }
      return task;
    } catch (err) {
      throw new Error(err);
    }
  },
  getTasks: async () => {
    const tasks = await getTasks();

    return tasks;
  },
};
