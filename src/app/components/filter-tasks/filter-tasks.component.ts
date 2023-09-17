import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.scss']
})
export class FilterTasksComponent {
  @Output() filterChanged = new EventEmitter<string>();
  selectedFilter: string = 'all';

  setFilter(filter: string): void {
    this.selectedFilter = filter;
    this.filterChanged.emit(filter);
  }
}



