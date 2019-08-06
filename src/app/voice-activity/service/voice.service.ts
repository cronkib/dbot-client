import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { VoiceActivity } from "../model/VoiceActivity";

@Injectable()
export class VoiceService {

	constructor(private http: HttpClient) { }

	getVoiceActivities(): Observable<VoiceActivity[]> {
		return this.http.get<VoiceActivity[]>("api/voiceActivities");
	}
}
