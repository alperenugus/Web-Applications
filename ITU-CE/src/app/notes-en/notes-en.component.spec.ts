import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEnComponent } from './notes-en.component';

describe('NotesEnComponent', () => {
  let component: NotesEnComponent;
  let fixture: ComponentFixture<NotesEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
