import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  @Output() newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchChange(value: string) {
    if(value.length == 0 || value.length >2)
      this.newSearchEvent.emit(value);
  }
}
