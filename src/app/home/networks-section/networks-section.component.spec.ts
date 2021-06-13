import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworksSectionComponent } from './networks-section.component';

describe('NetworksSectionComponent', () => {
  let component: NetworksSectionComponent;
  let fixture: ComponentFixture<NetworksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworksSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
