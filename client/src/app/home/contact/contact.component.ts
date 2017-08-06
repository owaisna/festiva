import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../animation/route.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': 'slideToRight'}
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
