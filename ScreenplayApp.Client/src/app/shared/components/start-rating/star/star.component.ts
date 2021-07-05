import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input() starId:any;
  @Input() rating:any;

  @Output() starEnter: EventEmitter<number> = new EventEmitter();
  @Output() starLeave: EventEmitter<number> = new EventEmitter();
  @Output() starClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStarEnter() {
    this.starEnter.emit(this.starId);
  }

  onStarLeave() {
    this.starLeave.emit(this.starId);
  }

  onStarClicked() {
    this.starClicked.emit(this.starId);
  }
}
