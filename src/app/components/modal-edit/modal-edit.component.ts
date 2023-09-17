import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent {
  @Input() editedTask: any; 
  @Output() closeModalEvent = new EventEmitter(); 
  @Output() saveTaskEvent = new EventEmitter(); 
  @Input() isModalOpen: boolean;
  editForm: FormGroup;
 
  closeModal() {
    this.isModalOpen = false;
    this.closeModalEvent.emit(); // Отправка события о закрытии модального окна
  }

  
  saveTask() {
    if (this.editForm.valid) {
      this.saveTaskEvent.emit(this.editedTask);
      this.isModalOpen = false;
    }
  }

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }

}
