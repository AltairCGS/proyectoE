import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      console.log('entrando a la auntenticacion')
      console.log(isAuthenticaed)
      if (isAuthenticaed) {
        console.log('usuario auntenticado')
        this.router.navigate(['/main']);
      }
    })
  }

  login() {
    console.log('entrando al login')
    this.auth.loginWithRedirect();
  }

  logOut() {
    this.auth.logout()
  }
}
