import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdventureHeaderComponent } from './edit-adventure-header.component';

describe('EditAdventureHeaderComponent', () => {
  let component: EditAdventureHeaderComponent;
  let fixture: ComponentFixture<EditAdventureHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdventureHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdventureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
