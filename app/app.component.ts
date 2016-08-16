import { Component } from '@angular/core';
import { ValidationComponent } from './validation/validation.component';

@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  directives: [ ValidationComponent ]
})
export class AppComponent { }