import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefectRegisterComponent } from "./defect-register.component";

describe("DefectRegisterComponent", () => {
  let component: DefectRegisterComponent;
  let fixture: ComponentFixture<DefectRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefectRegisterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
