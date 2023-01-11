import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  inputSearchValue: string = '';

  @Output()
  onInputSearchValue: EventEmitter<string> = new EventEmitter<string>();

  setSearchValue() {
    this.onInputSearchValue.emit(this.inputSearchValue);
  }
}
