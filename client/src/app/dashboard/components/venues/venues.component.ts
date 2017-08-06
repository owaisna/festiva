import { Component, OnInit } from '@angular/core';
import { VenueService } from './../../../app_services/venue.service';
import { EventTypeService } from './../../../app_services/event_type.service';

@Component({
	moduleId: module.id,
	selector: 'venues-dashboard',
	templateUrl: './venues.component.html'
})

export class VenueComponent implements OnInit {
	dataList;
	isEditingMode = false;
	formItem = { _id: undefined, name: '', location: '', event_type: '', description: '' };
	EventTypes;

	constructor(private factory: VenueService, private ETS: EventTypeService) { }

	ngOnInit() {
		this.factory.get().subscribe(data => this.dataList = data);
		this.ETS.get().subscribe(data => { this.EventTypes = data });
	}

	addThis() {
		if (this.formItem._id === undefined) {
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
			}
		});
	}

	updateThis(data) {
		this.formItem._id = data._id;
		this.formItem.name = data.name;
		this.formItem.description = data.description;
		this.formItem.location = data.location;
		this.formItem.event_type = data.event_type;
	}

	clearThis() {
		this.formItem = { _id: undefined, name: '', location: '', event_type: '', description: '' };
	}
}
