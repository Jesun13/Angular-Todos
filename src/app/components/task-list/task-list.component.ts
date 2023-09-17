import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { TaskService } from '../../service/task.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  isModalOpen = false;
  selectedFilter: string = 'all';
  tasks: ITask[] = [];
  editedTask: any = {};
  router: any;
  constructor(
    private taskService: TaskService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  filterTasks(filter: string): void {
    this.selectedFilter = filter;
  }

  getFilteredTasks(): ITask[] {
    if (this.selectedFilter === 'active') {
      return this.tasks.filter((task) => !task.completed);
    } else if (this.selectedFilter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    } else {
      return this.tasks;
    }
  }

  openEditModal(task: any) {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      this.editedTask = { ...task };
    }
  }
  updateTaskStatus(task: ITask): void {
    const foundTask = this.tasks.find((t) => t.id === task.id);
    if (foundTask) {
      foundTask.completed = task.completed;
      this.localStorageService.setItem('tasks', this.tasks);
    }
  }

  closeEditModal() {
    this.editedTask = {};
    this.isModalOpen = false;
  }

  saveEditedTask(editedTask: any) {
    const index = this.tasks.findIndex((task) => task.id === editedTask.id);
    if (index !== -1) {
      this.tasks[index] = editedTask;
    } else {
    }

    this.closeEditModal();
  }
  deleteTask(task: ITask) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.localStorageService.removeItem('tasks');
      // Обновляем задачи в localStorage после удаления
      this.localStorageService.setItem('tasks', this.tasks);
    }
  }
}