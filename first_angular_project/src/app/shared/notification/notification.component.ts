import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<!-- <div class="container" [hidden]="display"> -->
            <div class="container" [ngClass]="{fadeOut: display}">
              <div class="alert alert-primary d-flex justify-content-between">
                <p class="m-0">This website uses cookies to provide better user experience.</p>
                <span (click)="closeCookies()">X</span>
              </div>
            </div>`,
  styles: ['div p {font-size: 0.8rem}',
          'span {cursor: pointer}',
          '.fadeOut {opacity: 0; transition-duration: 0.5s; visibility: hidden;}']
})//fade-out to make a smooth disappear but the element saves it's place
export class NotificationComponent {
  display: boolean = false;

  closeCookies () {
    this.display = !this.display;
  }
}
