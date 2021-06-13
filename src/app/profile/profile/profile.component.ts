import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user/user.interface';
import { SessionService } from 'src/app/services/session/session.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.initValues()
  }

  async initValues() {
    let res = await this.userService.getUser(this.sessionService.getSession()).toPromise();
    if (res) {
      // let user = await res.toPromise()
      this.user = res.data();
    }
    
  }

}
