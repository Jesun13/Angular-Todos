import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  //  @Input() task: ITask;
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
