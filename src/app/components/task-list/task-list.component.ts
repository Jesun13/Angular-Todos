import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  isModalOpen = false;
  tasks: ITask[] = [];
  editedTask: any = {};
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  openEditModal(task: any) {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      this.editedTask = { ...task };
      console.log(this.isModalOpen);
      // Копирование данных задачи для редактирования
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
      console.log('Задача успешно отредактирована:', editedTask);
    } else {
      console.error('Задача для редактирования не найдена');
    }

    this.closeEditModal();
  }
}
