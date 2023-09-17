import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../app/components/task-list/task-list.component';
import { ModalEditComponent } from '../app/components/modal-edit/modal-edit.component';
import { Page404Component } from './components/page404/page404.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Перенаправление на страницу задач по умолчанию
  {
    path: 'tasks',
    component: TaskListComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
