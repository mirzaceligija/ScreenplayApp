import { Screenplay } from './../../../../shared/models/Screenplay.model';
import { ScreenplayService } from './../../../../core/services/screenplay.service';
import { Category } from './../../../../shared/models/Category.model';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit, OnDestroy {

  @Output() screenplays: Screenplay[] = []
  private screenplaysSub: Subscription = new Subscription();
  public isLoading: boolean = true;
  public categories: Category[] = [];
  public selectedCategoryId: string = '';

  constructor(private screenplayService: ScreenplayService) { }

  ngOnInit(): void {
    this.screenplayService.getCategories().subscribe((res:any) => {
      this.isLoading = true;
      this.categories = res;
      this.selectedCategoryId = this.categories[0]._id;

      this.screenplayService.getScreenplays(this.selectedCategoryId, true);
      this.screenplaysSub = this.screenplayService.getContentUpdateLstener().subscribe((res:any) => {
        this.screenplays = res.screenplays;
        //this.maxScreenplays = res.maxScreenplays;
        this.isLoading = false;
      });
    })
  }

  toggleSelect(categoryId:string) {
    console.log("Category ID --->", categoryId);
    if (categoryId == this.selectedCategoryId) {
      return
    } else {
      this.selectedCategoryId = categoryId;
      this.screenplayService.getScreenplays(this.selectedCategoryId);
    }
  }

  onLoadMore(){
    this.screenplayService.getScreenplays(this.selectedCategoryId);
  }

  onSearch(searchTerm: any){  
    if(searchTerm.length == 0)
      this.screenplayService.getScreenplays(this.selectedCategoryId, true);

    if(searchTerm.length > 2)
      this.screenplayService.getScreenplays(this.selectedCategoryId, true, searchTerm);
    
  }

  ngOnDestroy(): void {
    this.screenplaysSub.unsubscribe();
  }
}
