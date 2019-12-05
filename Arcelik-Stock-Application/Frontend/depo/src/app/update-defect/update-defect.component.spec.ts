import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateDefectComponent } from "./update-defect.component";

describe("UpdateDefectComponent", () => {
  let component: UpdateDefectComponent;
  let fixture: ComponentFixture<UpdateDefectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDefectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
