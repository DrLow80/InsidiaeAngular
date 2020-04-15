import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPrintComponent } from './story-print.component';

describe('StoryPrintComponent', () => {
  let component: StoryPrintComponent;
  let fixture: ComponentFixture<StoryPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
