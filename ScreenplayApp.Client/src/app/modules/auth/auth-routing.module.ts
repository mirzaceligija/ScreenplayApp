import { NoAuthGuard } from './../../core/guards/no-auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: AuthLayoutComponent,
  children: [
    { path: 'signin', component: SignInComponent, canActivate: [NoAuthGuard] },
    { path: 'signup', component: SignUpComponent, canActivate: [NoAuthGuard] },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
