import { AuthService } from './../../../core/authentication/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userIsAuthenticated = false;
  private authListenerSubs!: Subscription

  @Input() drawerRef!: MatDrawer;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe( isAuth => {
      this.userIsAuthenticated = isAuth
      console.log("isuaht", this.userIsAuthenticated)
    });
    console.log(this.userIsAuthenticated);
  }

  onSignOut(){
    this.authService.signout();
  }

  ngOnDestroy():void {
    this.authListenerSubs.unsubscribe();
  }
}
