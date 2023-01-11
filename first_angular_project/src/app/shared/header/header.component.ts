import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  heading: string = 'your one stop shop for everything';
  source: string = '../../../assets/6505894.jpg';

}
