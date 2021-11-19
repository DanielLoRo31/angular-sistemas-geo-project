import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-android-button',
  templateUrl: './android-button.component.html',
  styleUrls: ['./android-button.component.scss']
})
export class AndroidButtonComponent implements OnInit {

  logo = environment.ASSETS_URL + '/img/logos/google-store-logo-white.png'
  
  constructor() { }

  ngOnInit(): void {
  }

}
