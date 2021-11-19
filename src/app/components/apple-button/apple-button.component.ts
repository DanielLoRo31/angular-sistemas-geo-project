import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-apple-button',
  templateUrl: './apple-button.component.html',
  styleUrls: ['./apple-button.component.scss']
})
export class AppleButtonComponent implements OnInit {

  logo = environment.ASSETS_URL + '/img/logos/app-store-logo-white.png'

  constructor() { }

  ngOnInit(): void {
  }

}
