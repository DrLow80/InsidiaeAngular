import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurningPointComponent } from './turning-point.component';

describe('TurningPointComponent', () => {
  let component: TurningPointComponent;
  let fixture: ComponentFixture<TurningPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurningPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurningPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
