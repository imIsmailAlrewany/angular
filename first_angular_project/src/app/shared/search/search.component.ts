import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  output: string = '';

  // getValue (value: any) {
  //   console.log(<any>value.target.value);
  //   console.log(value.target.value);
  // }


  getValue (value: Event) { //e in Event must be Capital to work
    console.log((<HTMLInputElement>value.target).value);
    this.output = (<HTMLInputElement>value.target).value;
  }

}
