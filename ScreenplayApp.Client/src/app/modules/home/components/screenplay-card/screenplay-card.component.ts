import { Screenplay } from './../../../../shared/models/Screenplay.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-screenplay-card',
  templateUrl: './screenplay-card.component.html',
  styleUrls: ['./screenplay-card.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ScreenplayCardComponent implements OnInit {

  @Input() screenplay!: Screenplay;

  constructor() { }

  ngOnInit(): void {
  }

}
