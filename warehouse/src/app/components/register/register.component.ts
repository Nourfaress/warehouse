import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/service/validate.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  email: any;
  password: any;
  phone: any;
  street: any;
  city: any;
  country: any;

  constructor(
        private validateService: ValidateService,
        private authService: AuthService,
        private router: Router
  ) { }

  ngOnInit(): void {
  }
  onRegisterSubmit(): void{
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      street: this.street,
      city: this.city,
      country: this.country
    }

    if(!this.validateService.validateRegister(user)){
      return console.log('fill all fields');
    }

    if(!this.validateService.validateEmail(user.email)){
      return console.log('use valid email')
    }

    this.authService.registerUser(user).subscribe(user => {
      if(user) {
        console.log('You are now registered and can now login')
        this.router.navigate(['/login']);
      } else {
        console.log('Something went wrong')
        this.router.navigate(['/register']);
      }
    });
  }

}
