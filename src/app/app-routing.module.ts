import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../app/components/task-list/task-list.component';
import { ModalEditComponent } from '../app/components/modal-edit/modal-edit.component';
import { Page404Component } from './components/page404/page404.component';
import { AppComponent } from './app.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
