import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqEnComponent } from './faq-en.component';

describe('FaqEnComponent', () => {
  let component: FaqEnComponent;
  let fixture: ComponentFixture<FaqEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
