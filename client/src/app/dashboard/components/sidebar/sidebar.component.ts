import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../app_services/user.service';

@Component({
    moduleId: module.id,
    selector: 'sidebar-dashboard',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  isAdmin = false;
  constructor(private user: UserService) { }

  ngOnInit() {
    let u = this.user.getLoggedUser().role;
    console.log(u);
    if (u == 'admin') {
      // console.log(u == 'admin');
      this.isAdmin = true;
    } else { this.isAdmin = false; }
    console.log(this.isAdmin);
  }

}
