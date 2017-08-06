import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../../animation/route.animation';
import { OrderService } from './../../app_services/order.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': 'slideToRight'}
})
export class WorksComponent implements OnInit {

  events;

  constructor(private eventService: OrderService) { }

  ngOnInit() {
    this.eventService.get().subscribe(data => { this.events = data; 
      // console.log(this.events[0]) 
    });
  }

}
