import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inout', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('3s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  active = true;

  toggle() {
    this.active = !this.active;
  }
}
