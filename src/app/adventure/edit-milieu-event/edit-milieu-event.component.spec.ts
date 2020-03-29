import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMilieuEventComponent } from './edit-milieu-event.component';

describe('EditMilieuEventComponent', () => {
  let component: EditMilieuEventComponent;
  let fixture: ComponentFixture<EditMilieuEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMilieuEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMilieuEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
