import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from '../../src/app/components/task-list/task-list.component';
import { AddTaskComponent } from '../../src/app/components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    ModalEditComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
