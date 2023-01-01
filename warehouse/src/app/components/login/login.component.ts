import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(private authService: AuthService,
        private router: Router,) { }

  ngOnInit(): void {
  }

  onLoginSubmit(form: { value: { email: any; password: any; }; }){
    const user = {
      email: form.value.email,
      password: form.value.password
    };

    this.authService.authenticateUser(user).subscribe((email: any) => {
      if(user) {
        this.authService.storeUserData(email.token, user.email);
        console.log('you are now logged in');
        this.router.navigate(['']);
      } else {
      console.log('agin');
        this.router.navigate(['login']);
      }
      });

}}
