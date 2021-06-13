import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-network-link',
  templateUrl: './network-link.component.html',
  styleUrls: ['./network-link.component.scss']
})
export class NetworkLinkComponent implements OnInit {
  @Input() refLink: string;
  @Input() title: string;
  @Input() logo: string;


  img = environment.ASSETS_URL + '/img/networks/facebook.png'

  constructor() { }

  ngOnInit(): void {
  }

}
