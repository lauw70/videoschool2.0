import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  searchPlaceholder: string;
  Title: string;
  TitleSuffix: string;
  HideSuffix: boolean;

  constructor() { }

  ngOnInit() {
    this.searchTerm = '';
    this.searchPlaceholder = 'de middeleeuwen';
    this.Title = 'Hoe zit het met';
    this.TitleSuffix = '...';
    this.HideSuffix = false;
  }

  public searchSubmit() {
  }

}
