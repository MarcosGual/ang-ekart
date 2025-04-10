import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(event: any) {
    this.searchText = event.target?.value;
  }

  onSearchTextChange(){
    this.searchTextChanged.emit(this.searchText);
  }
}