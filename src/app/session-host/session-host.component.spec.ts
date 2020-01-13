import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionHostComponent } from './session-host.component';

describe('SessionHostComponent', () => {
  let component: SessionHostComponent;
  let fixture: ComponentFixture<SessionHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
