import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/todo.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() task: ITask;

}
