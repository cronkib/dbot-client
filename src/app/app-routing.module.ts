import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { MessageActivityComponent } from "./message-activity/message-activity.component";
import { VoiceActivityComponent } from "./voice-activity/voice-activity.component";
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
		path: "messageActivity",
		component: MessageActivityComponent,
		pathMatch: "full"
	},
	{
		path: "voiceActivity",
		component: VoiceActivityComponent,
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
