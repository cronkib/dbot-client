import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MessageActivityComponent } from "./message-activity.component";

describe("MessageActivityComponent", () => {
  let component: MessageActivityComponent;
  let fixture: ComponentFixture<MessageActivityComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ MessageActivityComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(MessageActivityComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
