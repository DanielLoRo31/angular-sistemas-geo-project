import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkLinkComponent } from './network-link.component';

describe('NetworkLinkComponent', () => {
  let component: NetworkLinkComponent;
  let fixture: ComponentFixture<NetworkLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
