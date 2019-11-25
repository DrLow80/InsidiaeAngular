import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureOverviewComponent } from './adventure-overview.component';

describe('AdventureOverviewComponent', () => {
  let component: AdventureOverviewComponent;
  let fixture: ComponentFixture<AdventureOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
