import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotsSectionComponent } from './screenshots-section.component';

describe('ScreenshotsSectionComponent', () => {
  let component: ScreenshotsSectionComponent;
  let fixture: ComponentFixture<ScreenshotsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenshotsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
