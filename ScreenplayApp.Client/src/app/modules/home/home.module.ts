import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ScreenplayCardComponent } from './components/screenplay-card/screenplay-card.component';
import { ScreenplayListComponent } from './components/screenplay-list/screenplay-list.component';
import { ScreenplayDetailsComponent } from './components/screenplay-details/screenplay-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RatingPageComponent } from './pages/rating-page/rating-page.component';
import { ScreenplayTableComponent } from './components/screenplay-table/screenplay-table.component';


// Material 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    ScreenplayCardComponent,
    ScreenplayListComponent,
    ScreenplayDetailsComponent,
    HomePageComponent,
    RatingPageComponent,
    ScreenplayTableComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class HomeModule { }
