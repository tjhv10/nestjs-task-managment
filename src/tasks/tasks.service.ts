import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.module";
import { v4 as uuid } from "uuid";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.Open,
    };

    this.tasks.push(task);
    return task;
  }
}
