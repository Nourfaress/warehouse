import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {
  }
  onLogoutClick(){
    this.authService.logout();
    // this.flashmessage.show('you are logged out', {
    //   cssClass: 'alert-success',
    //   timeout: 3000
    // });
    this.router.navigate(['/']);
    return false;
    }


}
