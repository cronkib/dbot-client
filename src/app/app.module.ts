import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { MessageActivityModule } from "./message-activity/message-activity.module";
import { VoiceActivityModule } from "./voice-activity/voice-activity.module";

import { DashboardModule } from "./dashboard/dashboard.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		DashboardModule,
		MessageActivityModule,
		VoiceActivityModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
