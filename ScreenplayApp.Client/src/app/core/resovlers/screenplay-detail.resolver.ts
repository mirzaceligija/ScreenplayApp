import { Screenplay } from './../../shared/models/Screenplay.model';
import { ScreenplayService } from './../services/screenplay.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScreenplayDetailResolver implements Resolve<boolean> {

  constructor(
    private screenplayService: ScreenplayService,
    private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Screenplay> | any {
    return this.screenplayService.getScreenplayById(route.params['id']).pipe(
      catchError(error => {
          this.router.navigate(['/screenplay']);
          return of(null);
      })
  );
  }
}
