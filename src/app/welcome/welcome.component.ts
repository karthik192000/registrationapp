import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../UserInfo';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{


  userInfo:UserInfo = new UserInfo('','',1);

  constructor(private registrationService: RegistrationService){

  }
  ngOnInit(): void {
    let email = localStorage?.getItem('email')!;
    this.registrationService.getUserInfo(email).subscribe(data => {
      console.log(data);
      this.userInfo = data;
    });
  }

  



}
