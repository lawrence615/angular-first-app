import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>XS Millionaires 2016</h1>
    <p>Ladies Night!!!</p>
   <app-parent></app-parent>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!!';
}
