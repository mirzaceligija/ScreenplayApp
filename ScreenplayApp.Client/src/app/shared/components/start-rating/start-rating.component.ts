import { ScreenplayService } from './../../../core/services/screenplay.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.sass']
})
export class StartRatingComponent implements OnInit {

  @Input() screenplayId: any;

  stars = [1,2,3,4,5];
  rating = 0;
  hoverState =0;

  constructor(private screenplayService: ScreenplayService) { }

  ngOnInit(): void {
  }

  onStarEnter(starId: number){
    this.hoverState = starId;
  }

  onStarLeave(){
    this.hoverState = 0;
  }

  onStarClick(starId: number){
    this.rating = starId;
    this.screenplayService.rateScreenplay(this.screenplayId, this.rating);
  }
}
