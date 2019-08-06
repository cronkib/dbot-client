import { Component, OnInit } from "@angular/core";
import { VoiceActivity } from "../model/VoiceActivity";
import { VoiceService } from "../service/voice.service";

@Component({
	selector: "app-voice-table",
	templateUrl: "./voice-table.component.html",
	styleUrls: ["./voice-table.component.css"]
})
export class VoiceTableComponent implements OnInit {
	activities: VoiceActivity[];

	constructor(private voiceService: VoiceService) {
		this.activities = [];
	}

	ngOnInit() {
		this.refreshActivities();
	}

	private refreshActivities() {
		this.voiceService.getVoiceActivities().subscribe((newActivities: VoiceActivity[]) => {
			this.activities = newActivities;
		});
	}
}
