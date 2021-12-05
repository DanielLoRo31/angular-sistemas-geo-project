import { Component, Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  
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
    });
  }

  async loginAction() {
    if (this.formGroup.valid) {
      try {
        let login = await this.userService.login(
          this.formGroup.get('email').value,
          this.formGroup.get('password').value
        );
        

        if (login) {
          this.router.navigate(['/', 'profile']);
        } else {
          Swal.fire({
            icon: 'warning',
            iconColor: '#88962c',
            title: 'Usuario',
            text: 'Contraseña o Correo incorrectos',
            confirmButtonColor: '#58611e'
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          iconColor: '#88962c',
          title: 'Error',
          text: error,
          confirmButtonColor: '#58611e'
        })
      }
    } else {
      Swal.fire({
        icon: 'warning',
        iconColor: '#88962c',
        title: 'Datos',
        text: 'Faltan datos',
        confirmButtonColor: '#58611e'
      })
    }
  }

  validatePassword(control: AbstractControl) {
    const value: string = control.value;
    let error = null;
    if (value.length < 6) {
      error = { ...error, length: 'debe tener al menos 6 caracteres' };
    }
    return error;
  }
}
