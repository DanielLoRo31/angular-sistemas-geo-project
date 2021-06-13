import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss']
})
export class TechnologiesSectionComponent implements OnInit {


  logo = {
    flutter: environment.ASSETS_URL + '/img/logos/flutter.png',
    dart: environment.ASSETS_URL + '/img/logos/dart.png',
    go: environment.ASSETS_URL + '/img/logos/go.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
