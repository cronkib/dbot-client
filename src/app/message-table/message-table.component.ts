import { Component, OnInit } from "@angular/core";
import { MessageActivity } from "../model/MessageActivity";
import { MessageService } from "../service/message.service";

@Component({
	selector: "app-message-table",
	templateUrl: "./message-table.component.html",
	styleUrls: ["./message-table.component.css"]
})
export class MessageTableComponent implements OnInit {
	messages: MessageActivity[];

	constructor(private messageService: MessageService) {
		this.messages = [];
	}

	ngOnInit() {
		this.refreshMessages();
	}

	private refreshMessages() {
		this.messageService.getMessages().subscribe((newMessages: MessageActivity[]) => {
			this.messages = newMessages;
		});
	}
}
