
import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { tasks } from '../data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = tasks;

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }
  
}
