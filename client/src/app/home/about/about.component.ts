import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../animation/route.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': 'slideToRight'}
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
