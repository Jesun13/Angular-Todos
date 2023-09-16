import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent {
  @Input() editedTask: any; // Входное свойство для передачи данных задачи для редактирования
  @Output() closeModalEvent = new EventEmitter(); // Событие для закрытия модального окна
  @Output() saveTaskEvent = new EventEmitter(); // Событие для сохранения отредактированной задачи
  @Input() isModalOpen: boolean;
  editForm: FormGroup;
  // Метод для закрытия модального окна
  closeModal() {
    this.isModalOpen = false;
    this.closeModalEvent.emit(); // Отправка события о закрытии модального окна
  }

  // Метод для сохранения отредактированной задачи
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

  // get title() {
  //   return this.editForm.get('title');
  // }
  // get description() {
  //   return this.editForm.get('description');
  // }
}
