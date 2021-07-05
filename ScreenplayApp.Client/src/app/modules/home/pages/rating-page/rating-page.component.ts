import { Screenplay } from './../../../../shared/models/Screenplay.model';
import { ScreenplayService } from './../../../../core/services/screenplay.service';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.sass']
})
export class RatingPageComponent implements OnInit, OnDestroy{

  @Output() screenplays: Screenplay[] = [];

  private screenplaysSub: Subscription = new Subscription();
  public isLoading: boolean = true;
  private selectedCategoryId!: string; 

  constructor(private screenplayService: ScreenplayService) { }

  ngOnInit(): void {
    this.screenplayService.getCategories().subscribe((res:any) => {
      this.isLoading = true;
      this.selectedCategoryId = res[0]._id;

      this.screenplayService.getScreenplays(this.selectedCategoryId, true);
      this.screenplaysSub = this.screenplayService.getContentUpdateLstener().subscribe((res:any) => {
        this.screenplays = res.screenplays;
        this.isLoading = false;
      });
    })
  }

  onLoadMore(){
    this.screenplayService.getScreenplays(this.selectedCategoryId);
  }

  ngOnDestroy() : void {
    this.screenplaysSub.unsubscribe();
  }
}
