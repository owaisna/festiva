import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from './../../../app_services/user.service';

@Component({
    moduleId: module.id,
    selector: 'navbar-dashboard',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  dataList;
  cuser;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.cuser = this.userService.getLoggedUser();
    this.userService.get(this.cuser._id).subscribe(data => { this.cuser = data });
  }

  logout() {
    this.userService.logout();
  }

}
