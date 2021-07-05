import { AuthService } from './../authentication/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | import('@angular/router').UrlTree | Observable < boolean |
    import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
      const isAuth = this.authService.getIsAuth();
      if (isAuth) {
        this.router.navigate(['/']);
      }
      return !isAuth;
  }
  
}
