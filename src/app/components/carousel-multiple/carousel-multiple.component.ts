import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel-multiple',
  templateUrl: './carousel-multiple.component.html',
  styleUrls: ['./carousel-multiple.component.scss']
})
export class CarouselMultipleComponent implements OnInit {

  items: String[]= Array(7)
  ASSETS = environment.ASSETS_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
