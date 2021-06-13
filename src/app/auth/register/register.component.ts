import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  geometry: Object;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        this.validatePassword,
      ]),
      name: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
    });
  }

  validatePassword(control: AbstractControl) {
    const value: string = control.value;
    let error = null;
    if (value.length < 6) {
      error = { ...error, length: 'debe tener al menos 6 caracteres' };
    }
    return error;
  }

  async registerAction() {
    if (this.formGroup.valid) {
      let data: IUser = this.formGroup.value;
      data.geometry = this.geometry;
      let res = await this.userService.register(data);

      if (res) {
        this.router.navigate(['/', 'profile']);
      }
    }

  }

  setGeometry($event) {
    this.geometry = $event;
  }
}
