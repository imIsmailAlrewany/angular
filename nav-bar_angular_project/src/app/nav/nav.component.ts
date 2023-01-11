import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output()
  onLinkClicked: EventEmitter<string> = new EventEmitter<string>();

  getId(id:any) {
    <any>id.preventDefault();
    this.onLinkClicked.emit(<any>id.target.id);
  }
}
