import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { LoginRequest } from '../LoginRequest';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private registrationService: RegistrationService,private router: Router){

  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  get f(){
    return this.loginForm.controls;
  }

  login(){
    let loginRequest: LoginRequest = new LoginRequest(this.loginForm?.get('email')!.value!,this.loginForm?.get('password')!.value!)
    this.registrationService.login(loginRequest).subscribe(response =>{
      console.log(response);
      localStorage.setItem('email',this.loginForm?.get('email')!.value!);
      this.router.navigate(['welcome']);
    });
  }
}
