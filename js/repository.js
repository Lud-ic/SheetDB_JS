import { deleteTask, getAllTasks, postTask, putTask } from "./service.js";

export async function getTasksStorage() {
  try {
    const tasks = await getAllTasks();
    if (!tasks) return [];
    return tasks;
  } catch (error) {
    console.log("MEU ERRO :: ", error);
    return [];
  }
}

export function addTaskStorage(task) {
  return postTask(task);
}

export function updateTaskStorage(value, task) {
  return putTask(value, task);
}

export function removeTaskStorage(taskName) {
  return deleteTask(taskName);
}