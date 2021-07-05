import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ErrorComponent } from './components/error/error.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { StarComponent } from './components/start-rating/star/star.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SearchbarComponent,
    ErrorComponent,
    StartRatingComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SearchbarComponent,
    ErrorComponent,
    StartRatingComponent,
    StartRatingComponent
  ]
})
export class SharedModule { }
