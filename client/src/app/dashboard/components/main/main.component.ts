import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../../app_services/order.service';
import { UserService } from './../../../app_services/user.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
	moduleId: module.id,
	selector: 'main-dashboard',
	templateUrl: './main.component.html'
})
export class MainDashComponent implements OnInit {

	orders;
	currentUser;

	constructor(private orderService: OrderService, private user: UserService, private router: Router) {
		orderService.get().subscribe(data => { this.orders = data });
		// orderService.getUserOrders(this.user.getLoggedUser()._id).subscribe(data => { this.orders = data });
	}

	ngOnInit() {
		this.currentUser = (this.user.getLoggedUser());
		this.user.get(this.currentUser._id).subscribe(data => { this.currentUser = data });
	}

	updateThis(id) {
		// this.orderService.update(o).subscribe(data => console.log(data));
		// console.log(id);
		Cookie.set('orderData', id, 1 / 24 / 60 / 60);
		this.router.navigate(['/dashboard/order']);
	}

	deleteThis(id) {
		this.orderService.delete(id).subscribe(data => {
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i]._id == id) {
					this.orders.splice(i, 1);
					return;
				}
			};
		});
	}

}
