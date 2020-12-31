import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  @Output() isLoggedIn: boolean;
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  getLogin(username, password) {

    return this.http.post(environment.loginUrl, { user_name: username, user_password: password }, this.httpOptions)
      .toPromise()
      .then((res) => res)
      .catch((err) => err.message);
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }

  setUser(username, firstname, lastname, email, password) {
    return this.http.post(environment.signupUrl, { user_name: username, user_first_name: firstname,
       user_last_name: lastname, user_email: email, user_password: password }, this.httpOptions)
      .toPromise()
      .then((res) => res)
      .catch((err) => err.message);
  }
}
