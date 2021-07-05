import { ScreenplayService } from './../../../../core/services/screenplay.service';
import { Screenplay } from './../../../../shared/models/Screenplay.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-screenplay-table',
  templateUrl: './screenplay-table.component.html',
  styleUrls: ['./screenplay-table.component.sass']
})
export class ScreenplayTableComponent implements OnInit {

  @Input() screenplays: Screenplay[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}
