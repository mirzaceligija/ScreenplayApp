import { Screenplay } from './../../../../shared/models/Screenplay.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-screenplay-list',
  templateUrl: './screenplay-list.component.html',
  styleUrls: ['./screenplay-list.component.sass']
})
export class ScreenplayListComponent implements OnInit {

  @Output() @Input() screenplays: Screenplay[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
