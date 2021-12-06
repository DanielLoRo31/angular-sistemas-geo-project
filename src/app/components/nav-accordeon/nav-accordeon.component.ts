import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-accordeon',
  templateUrl: './nav-accordeon.component.html',
  styleUrls: ['./nav-accordeon.component.scss'],
})
export class NavAccordeonComponent implements OnInit {
  listSection: {
    name: string
    sections: {
      name: string,
      route?: string
    }[]
  }[] = []
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listSection = [
      // { name: 'Data Info', sections: [{ name: 'Accounts', route: 'info'}] },
      { name: 'Stats', sections: [{ name: 'Accounts', route: 'account'}, { name: 'Transactions', route: 'transactions'}] },
    ]
  }

  navigateTo(route: string) {
    console.log(route)
    this.router.navigate([`/console/${route}`])
  }
}
