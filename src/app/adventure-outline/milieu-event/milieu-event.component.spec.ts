import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilieuEventComponent } from './milieu-event.component';

describe('MilieuEventComponent', () => {
  let component: MilieuEventComponent;
  let fixture: ComponentFixture<MilieuEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilieuEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilieuEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
