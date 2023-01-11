import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  inputValue: string = 'All';

  @Output()
  selectedEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  onChangeRadioSelection() {
    this.selectedEventEmitter.emit(this.inputValue);
  }
}
