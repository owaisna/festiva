import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../animation/route.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
