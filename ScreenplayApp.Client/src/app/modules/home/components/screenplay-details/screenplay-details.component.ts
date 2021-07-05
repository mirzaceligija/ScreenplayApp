import { ScreenplayService } from './../../../../core/services/screenplay.service';
import { Screenplay } from './../../../../shared/models/Screenplay.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screenplay-details',
  templateUrl: './screenplay-details.component.html',
  styleUrls: ['./screenplay-details.component.sass']
})
export class ScreenplayDetailsComponent implements OnInit {

  screenplay!: Screenplay;
  private contentId: string = "";

  constructor(public route: ActivatedRoute, private screenplayService: ScreenplayService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.screenplay = data['screenplay'];
    });
  }

}
