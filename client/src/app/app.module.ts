import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './authentication/authGuard';
// import { AuthService } from './authentication/auth.service';
import { UserService } from './app_services/user.service';
import { OrderService } from './app_services/order.service';
import { CateringService } from './app_services/catering.service';
import { EventTypeService } from './app_services/event_type.service';
import { ServicesService } from './app_services/services.service';
import { VenueService } from './app_services/venue.service';
import { PhotosService } from './app_services/photos.service';
import { FeedbackService } from './app_services/feedback.service';

import { AppComponent } from './app.component';

// import { SiteComponent } 			from './site/site.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { MainComponent } from './home/main/main.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { WorksComponent } from './home/works/works.component';
// import { Component } 			from './home/';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestcompComponent } from './testcomp/testcomp.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { MainDashComponent } from './dashboard/components/main/main.component';
import { DummyComponent } from './dashboard/components/dummy/main.component';
import { UserComponent } from './dashboard/components/user/user.component';
import { CalanderDashComponent } from './dashboard/components/calander/calander.component';
import { OrderComponent } from './dashboard/components/order/order.component';
import { CateringComponent } from './dashboard/components/catering/catering.component';
import { ServicesComponent } from './dashboard/components/services/services.component';
import { VenueComponent } from './dashboard/components/venues/venues.component';
import { PhotosComponent } from './dashboard/components/photos/photos.component';
import { FeedbackComponent } from './dashboard/components/feedback/feedback.component';

// import { Cookie } from 'ng2-cookies/ng2-cookies';

const appRoutes: Routes = [
	{
		path: '',
    component: HomeComponent,
    // redirectTo: "/dashboard", pathMatch: 'full'
		children: [
			{ path: '', component: MainComponent },
			{ path: 'about', component: AboutComponent },
			{ path: 'works', component: WorksComponent },
			{ path: 'contact', component: ContactComponent }
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{
		path: 'dashboard', component: DashboardComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: "",
				canActivateChild: [AuthGuard],
				children: [
					{ path: "", component: MainDashComponent },
					{ path: "user", component: UserComponent },
					{ path: "calander", component: CalanderDashComponent },
					{ path: "order", component: OrderComponent },
					{ path: "catering", component: CateringComponent },
					{ path: "services", component: ServicesComponent },
					{ path: "venues", component: VenueComponent },
					{ path: "photos", component: PhotosComponent },
					{ path: "feedback", component: FeedbackComponent },
					{ path: "dummy", component: DummyComponent }
				]
			}
]
	},
{ path: '**', redirectTo: "/", pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		// SiteComponent,
		HomeComponent,
		NavComponent,
		MainComponent,
		AboutComponent,
		WorksComponent,
		ContactComponent,

		LoginComponent,
		SignupComponent,

		DashboardComponent,
		UserComponent,
		NavbarComponent,
		SidebarComponent,
		MainDashComponent,
		DummyComponent,
		CalanderDashComponent,
		OrderComponent,
		CateringComponent,
		ServicesComponent,
		VenueComponent,
		PhotosComponent,
		FeedbackComponent,
		TestcompComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		AuthGuard,
		UserService,
		OrderService,
		CateringService,
		EventTypeService,
		VenueService,
		ServicesService,
		PhotosService,
		FeedbackService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
