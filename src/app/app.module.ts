import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from '../../src/app/components/task-list/task-list.component';
import { AddTaskComponent } from '../../src/app/components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { LocalStorageService } from './service/local-storage.service';
import { Page404Component } from './components/page404/page404.component';
import { FilterTasksComponent } from './components/filter-tasks/filter-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    ModalEditComponent,
    Page404Component,
    FilterTasksComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
