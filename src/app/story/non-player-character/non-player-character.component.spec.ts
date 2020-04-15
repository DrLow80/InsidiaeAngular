import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPlayerCharacterComponent } from './non-player-character.component';

describe('NonPlayerCharacterComponent', () => {
  let component: NonPlayerCharacterComponent;
  let fixture: ComponentFixture<NonPlayerCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPlayerCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPlayerCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
