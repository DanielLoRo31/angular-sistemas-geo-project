import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import AOS from 'aos';
import { SetSessionAction } from './models/menu/menu.redux';
import { SessionService } from './services/session/session.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'final-project-angular';

  constructor(private store: Store, private sessionService: SessionService) {}

  ngOnInit() {
    AOS.init();
    this.initValues();
  }

  async initValues() {
    await this.store
      .dispatch(
        new SetSessionAction(this.sessionService.getSession() ? true : false)
      )
      .toPromise();
  }
}
