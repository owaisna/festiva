import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../../app_services/order.service';
import { CateringService } from './../../../app_services/catering.service';
import { EventTypeService } from './../../../app_services/event_type.service';
import { ServicesService } from './../../../app_services/services.service';
import { VenueService } from './../../../app_services/venue.service';
import { UserService } from './../../../app_services/user.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
	moduleId: module.id,
	selector: 'order-dashboard',
	templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {
	// d = new Date();
	orders;
	caterings;
	eventTypes;
	services;
	venues;
	coo;

  newOrder = {
    _id: undefined,
    // event_date: "2017-04-22",
    // event_date: this.prettyDate,
    event_date: '',
    event_type: "Marriage",
    venue: "q",
    catering: "catering 1",
    service: "service 0",
    user: this.userService.getLoggedUser()
  };

  constructor(
		private orderService: OrderService,
		private cateringService: CateringService,
		private eventTypeService: EventTypeService,
		private servicesService: ServicesService,
		private venueService: VenueService,
		private userService: UserService,
		private router: Router
	) {
		cateringService.get().subscribe(data => { this.caterings = data; });
		eventTypeService.get().subscribe(data => { this.eventTypes = data; });
		servicesService.get().subscribe(data => { this.services = data; });
		venueService.get().subscribe(data => { this.venues = data; });

	}

	ngOnInit() {
	  if (Cookie.get('orderData')) {
      this.orderService.getById(Cookie.get('orderData')).subscribe(data => {
        this.coo = "*";
        // console.log(data[0]);
        this.newOrder = data[0];
        // Cookie.delete('orderData');
      });
    }
	}

	onSubmit(e) {
		// console.log(e.value);
		// console.log(this.prettyDate);
		// this.newOrder.event_date = Date();
	}

	addThis() {
		if (this.newOrder._id === undefined) {
			this.orderService.add(this.newOrder).subscribe(data => {
				// console.log(data);
				this.router.navigate(['/dashboard']);
				// this.clearThis();
			});
		} else {
			this.orderService.update(this.newOrder).subscribe(data => {
				// console.log(data);
				this.router.navigate(['/dashboard']);
				// var id = this.newOrder._id;
				// for (var i = 0; i < this.dataList.length; i++) {
				// 	if (this.dataList[i]._id == id) {
				// 		this.dataList[i] = this.newOrder;
				// 		this.clearThis();
				// 		return;
				// 	}
				// };
			});
		}
	}

}
