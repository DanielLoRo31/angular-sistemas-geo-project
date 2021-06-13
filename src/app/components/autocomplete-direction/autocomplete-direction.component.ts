import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-autocomplete-direction',
  templateUrl: './autocomplete-direction.component.html',
  styleUrls: ['./autocomplete-direction.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteDirectionComponent),
      multi: true,
    },
  ],
})
export class AutocompleteDirectionComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  @Input() margin: string;

  @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() setGeometry: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  value: string;
  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() {}

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  ngOnInit(): void {}

  onChangeValue($event) {
    this.changeEvent.emit($event);
  }

  /* form control functions */
  writeValue(value: any): void {
    if (value) {
      this.value = value
        ? value === 'undefined' || value === 'null'
          ? ''
          : value
        : '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /* end form control functions */

  public handleAddressChange(address: Address) {
    this.setGeometry.emit({
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng(),
    });
  }
}
