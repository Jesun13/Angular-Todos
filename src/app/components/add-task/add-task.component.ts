import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from 'src/app/models/task.model';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      completed: false,
    });
  }

  get title() {
    return this.taskForm.get('title');
  }
  get description() {
    return this.taskForm.get('description');
  }

  addTask() {
    console.log(this.taskForm.get('title'));
    
    if (this.taskForm.valid) {
      const newTask: ITask = this.taskForm.value as ITask;
      this.taskService.addTask(newTask);
      this.taskForm.reset({
        title: '',
        description: '',
        completed: false,
      });
    }
  }
}
