import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { MessagesComponent } from "./messages/messages.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
	{
		path: "dashboard",
		component: DashboardComponent,
		pathMatch: "full"
	},
	{
		path: "",
		redirectTo: "/dashboard",
		pathMatch: "full"
	},
	{
		path: "messages",
		component: MessagesComponent,
		pathMatch: "full"
	},
	{
		path: "**",
		component: PageNotFoundComponent,
		pathMatch: "full"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
