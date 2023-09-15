import { Component } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { TaskService } from '../../service/task.service';


@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  newTask: ITask = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  addTask() {
    console.log('dwqdwqd');
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = { id: 0, title: '', description: '', completed: false };
    }
  }
}

