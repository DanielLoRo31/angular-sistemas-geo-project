import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav-accordeon',
  templateUrl: './nav-accordeon.component.html',
  styleUrls: ['./nav-accordeon.component.scss'],
})
export class NavAccordeonComponent implements OnInit {
  listSection: {
    name: string
    sections: {
      name: string
    }[]
  }[] = []
  constructor() {}

  ngOnInit(): void {
    this.listSection = [
      { name: 'Data Info', sections: [{ name: 'Transactions' }] },
      { name: 'Stats', sections: [{ name: 'Places' }] },
    ]
  }
}
