import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  // Метод для закрытия модального окна
  closeModal() {
    this.isModalOpen = false;
    this.closeModalEvent.emit(); // Отправка события о закрытии модального окна
  }

  // Метод для сохранения отредактированной задачи
  saveTask() {
    this.saveTaskEvent.emit(this.editedTask); // Отправка события о сохранении задачи
    this.isModalOpen = false;
  }
}
