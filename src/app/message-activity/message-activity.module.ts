import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageActivityComponent } from "./message-activity.component";
import { MessageTableComponent } from "./message-table/message-table.component";
import { MessageService } from "./service/message.service";

@NgModule({
	declarations: [
		MessageActivityComponent,
		MessageTableComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MessageActivityComponent,
		MessageTableComponent
	],
	providers: [
		MessageService
	]
})
export class MessageActivityModule { }
