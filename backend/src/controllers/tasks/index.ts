import { TaskInterface } from './interface';
import { TaskModel } from './model';

// Get a task filtered by ID
export async function getTask(value: { id: string }) {
  try {
    let filters = {};
    if (value.id) {
      filters = { ...filters, id: value.id };
    }

    const task = await TaskModel.findOne(filters).exec();
    return task;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// Bring all the Tasks without filters
export async function getTasks() {
  try {
    return await TaskModel.find({}).exec();
  } catch (err) {
    console.log(err);
    return null;
  }
}

// Create a Task
export async function createTask(values: TaskInterface) {
  try {
    return await TaskModel.create(values);
  } catch (err) {
    console.log(err);
    return null;
  }
}

// Delete a Task
export async function deleteTask(values: { id: string }) {
  try {
    const task = await TaskModel.findOneAndDelete({ _id: values.id }).exec();
    return task;
  } catch (err) {
    console.log(err);
    return null;
  }
}
