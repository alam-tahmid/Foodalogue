import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  headers = new HttpHeaders({ 'user-key': '2867cf6b1ecc191f2e2071b9c5cfd1f5', 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  public getRestaurants(cityName, cuisineName): Promise<any> {
    return this.httpClient.get<Res>(` https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
      { headers: this.headers })
      .toPromise()
      .then(res => this.getAllRestaurants(res.location_suggestions[0].id, cuisineName))
      .catch((err) => err.message);
  }

  public getAllRestaurants(cityId, cuisineName): Promise<any> {
    return this.httpClient.get<Res>(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city
                                    &q=${cuisineName}&count=20;`,
      { headers: this.headers })
      .toPromise()
      .then(
        (res) => res.restaurants
      )
      .catch((err) => err.message);
  }

}

interface Res {
  location_suggestions: any[];
  restaurants: any[];
}
