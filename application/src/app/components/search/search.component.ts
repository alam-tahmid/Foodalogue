import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  list = false;
  restaurants = Array;
  public searchcity: string;
  public searchcuisine: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  fetchRestaurants(formData) {
    this.searchcity = formData.city;
    this.searchcuisine = formData.cuisine;
    this.searchService.getRestaurants(formData.city, formData.cuisine).then(
      (data) => {
        if (data != null) {
          this.list = true;
          this.restaurants = data;
        } else {
          this.restaurants = null;
        }
      });
  }


}
