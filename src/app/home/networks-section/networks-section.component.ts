import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-networks-section',
  templateUrl: './networks-section.component.html',
  styleUrls: ['./networks-section.component.scss'],
})
export class NetworksSectionComponent implements OnInit {
  networks = [
    {
      logo: environment.ASSETS_URL + '/img/networks/facebook.png',
      title: 'facebook',
      url: 'https://www.facebook.com/CashCoin-102732121976335',
    },
    {
      logo: environment.ASSETS_URL + '/img/networks/blogger.png',
      title: 'Blog',
      url: 'https://cc-cashcoin.blogspot.com/',
    },
    {
      logo: environment.ASSETS_URL + '/img/networks/instagram.png',
      title: 'Instagram',
      url: 'https://www.instagram.com/cc.cashcoin/',
    },
    {
      logo: environment.ASSETS_URL + '/img/networks/twitter.png',
      title: 'Twitter',
      url: 'https://twitter.com/CC_CashCoin',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
