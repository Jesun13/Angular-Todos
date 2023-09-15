import { Component } from '@angular/core';
import { ITask } from 'src/app/models/todo.model';
import {tasks} from '../app/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Список задач';

  tasks: ITask[] = tasks
}
