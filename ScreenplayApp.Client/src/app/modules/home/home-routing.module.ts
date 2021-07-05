import { ScreenplayDetailResolver } from './../../core/resovlers/screenplay-detail.resolver';
import { ScreenplayDetailsComponent } from './components/screenplay-details/screenplay-details.component';
import { RatingPageComponent } from './pages/rating-page/rating-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: HomeLayoutComponent,
  children: [
    { path: '', component: HomePageComponent },
    { path: 'rating', component: RatingPageComponent },
    { path: 'screenplay/:id', component: ScreenplayDetailsComponent, resolve: {screenplay: ScreenplayDetailResolver}},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
