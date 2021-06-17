import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() lat: number = 20.9846486741212;
  @Input() lng: number = -101.28429516253313;
  @Input() markText: string = 'CashCoin'
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

  ngOnInit(): void {
  }
}
