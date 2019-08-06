import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VoiceActivityComponent } from "./voice-activity.component";
import { VoiceTableComponent } from "./voice-table/voice-table.component";
import { VoiceService } from "./service/voice.service";

@NgModule({
	declarations: [
		VoiceActivityComponent,
		VoiceTableComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		VoiceActivityComponent,
		VoiceTableComponent
	],
	providers: [
		VoiceService
	]
})
export class VoiceActivityModule { }
