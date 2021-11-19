import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAccordeonComponent } from './nav-accordeon.component';

describe('NavAccordeonComponent', () => {
  let component: NavAccordeonComponent;
  let fixture: ComponentFixture<NavAccordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAccordeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
