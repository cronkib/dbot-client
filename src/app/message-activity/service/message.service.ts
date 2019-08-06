import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { MessageActivity } from "../model/MessageActivity";

@Injectable()
export class MessageService {

	constructor(private http: HttpClient) { }

	getMessageActivities(): Observable<MessageActivity[]> {
		return this.http.get<MessageActivity[]>("api/messageActivities");
	}
}
