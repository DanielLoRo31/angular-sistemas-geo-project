import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidButtonComponent } from './android-button.component';

describe('AndroidButtonComponent', () => {
  let component: AndroidButtonComponent;
  let fixture: ComponentFixture<AndroidButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
