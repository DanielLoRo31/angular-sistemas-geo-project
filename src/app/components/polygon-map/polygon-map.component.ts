import { Component, Input, OnInit } from '@angular/core';
import { LatLngLiteral } from 'ngx-google-places-autocomplete/objects/latLng';

@Component({
  selector: 'app-polygon-map',
  templateUrl: './polygon-map.component.html',
  styleUrls: ['./polygon-map.component.scss'],
})
export class PolygonMapComponent implements OnInit {
  @Input() lat: number = 20.9846486741212;
  @Input() lng: number = -101.28429516253313;
  @Input() markText: string = 'CashCoin'
  @Input() height: string = '50vh';
  @Input() paths: LatLngLiteral[] = [];
  icon = {
    url: 'https://bestmedia.mx/wp-content/uploads/2020/03/InexperiencedGlossyAsiaticgreaterfreshwaterclam-small.gif',
    scaledSize: {
      width: 50,
      height: 50,
    },
    origin: {
      x: 0,
      y: 0,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
