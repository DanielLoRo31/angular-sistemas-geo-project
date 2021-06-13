import { Component, HostListener, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IMenuModel, MenuState, SetSessionAction } from 'src/app/models/menu/menu.redux';
import { SessionService } from 'src/app/services/session/session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Select(MenuState.showMenu) show$: Observable<boolean>;
  fixed: boolean = false;
  ASSETS = environment.ASSETS_URL;

  constructor(private sessionService: SessionService, private store: Store) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (
      event.target.body.scrollTop > 0 ||
      event.target.documentElement.scrollTop > 0
    ) {
      this.fixed = true;
    } else {
      this.fixed = false;
    }
  }

  ngOnInit(): void {}

  async onOut() {
    this.sessionService.removeSession();
    await this.store.dispatch(new SetSessionAction(false)).toPromise();
  }
}
