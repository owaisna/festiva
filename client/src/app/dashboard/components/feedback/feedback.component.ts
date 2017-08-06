import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './../../../app_services/feedback.service';
import { ServicesService } from './../../../app_services/services.service';
import { UserService } from './../../../app_services/user.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
	moduleId: module.id,
	selector: 'feedback-dashboard',
	templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {
	dataList;
	isEditingMode = false;
	formItem = { _id: undefined, user: '', feedback: '', service: 'service 0' };
	serviceList;
	currentUser;

	constructor(private factory: FeedbackService, private services: ServicesService, private user: UserService) {
		this.services.get().subscribe(data => this.serviceList = data);
	}

	ngOnInit() {
		this.factory.get().subscribe(data => {
			this.dataList = data;
		});
		this.currentUser = (this.user.getLoggedUser());
		this.user.get(this.currentUser._id).subscribe(data => { this.currentUser = data });
	}

	addThis() {
		if (this.formItem._id === undefined) {
			this.formItem.user = this.currentUser.name;
			this.factory.add(this.formItem).subscribe(data => {
				this.dataList.push(data);
				this.clearThis();
			});
		} else {
			this.factory.update(this.formItem).subscribe(data => {
				var id = this.formItem._id;
				for (var i = 0; i < this.dataList.length; i++) {
					if (this.dataList[i]._id == id) {
						this.dataList[i] = this.formItem;
						this.clearThis();
						return;
					}
				};
			});
		}
	}

	deleteThis(id) {
		this.factory.delete(id).subscribe(data => {
			for (var i = 0; i < this.dataList.length; i++) {
				if (this.dataList[i]._id == id) {
					this.dataList.splice(i, 1);
					return;
				}
			};
		});
	}

	updateThis(data) {
		this.formItem._id = data._id;
		this.formItem.user = data.user;
		this.formItem.feedback = data.feedback;
		this.formItem.service = data.service;
	}

	clearThis() {
		this.formItem = { _id: undefined, user: '', feedback: '', service: 'service 0' };
	}
}
