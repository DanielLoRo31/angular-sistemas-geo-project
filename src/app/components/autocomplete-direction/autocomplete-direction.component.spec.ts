import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDirectionComponent } from './autocomplete-direction.component';

describe('AutocompleteDirectionComponent', () => {
  let component: AutocompleteDirectionComponent;
  let fixture: ComponentFixture<AutocompleteDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
