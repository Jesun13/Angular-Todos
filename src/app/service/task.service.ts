import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [];

  constructor(private localStorageService: LocalStorageService) {
    // Загрузка задач из localStorage при инициализации сервиса
    this.loadTasks();
  }

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    // Обновляем задачи в localStorage
    this.localStorageService.setItem('tasks', this.tasks);
  }

  private loadTasks() {
    // Загрузка задач из localStorage
    const savedTasks = this.localStorageService.getItem('tasks');
    if (savedTasks && Array.isArray(savedTasks)) {
      this.tasks = savedTasks;
    } else {
      this.tasks = [];
    }
  }
  
}
