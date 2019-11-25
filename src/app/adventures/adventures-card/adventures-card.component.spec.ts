import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventuresCardComponent } from './adventures-card.component';

describe('AdventuresCardComponent', () => {
  let component: AdventuresCardComponent;
  let fixture: ComponentFixture<AdventuresCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventuresCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventuresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
