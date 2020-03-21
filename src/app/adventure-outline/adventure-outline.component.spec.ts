import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureOutlineComponent } from './adventure-outline.component';

describe('AdventureOutlineComponent', () => {
  let component: AdventureOutlineComponent;
  let fixture: ComponentFixture<AdventureOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
