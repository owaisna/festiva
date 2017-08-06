import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../animation/route.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': 'slideToRight'}
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
