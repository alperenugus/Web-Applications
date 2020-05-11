import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksEnComponent } from './links-en.component';

describe('LinksEnComponent', () => {
  let component: LinksEnComponent;
  let fixture: ComponentFixture<LinksEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
