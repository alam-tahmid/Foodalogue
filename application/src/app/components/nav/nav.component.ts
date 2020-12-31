import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Router } from '@angular/router';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})
export class NavComponent implements OnInit {
  loggedIn = false;
  accountDisp = true;
  user: any;
  userId: any;

  constructor(private userService: UserService, private favorite: FavoritesService,
              private router: Router, private local: LocalStorageService) {
    if (this.local.retrieve('storeSession') != null) {
      this.loggedIn = true;
      this.accountDisp = false;
      this.user = this.local.retrieve('storeSession').user;
    } else {
      this.loggedIn = false;
      this.accountDisp = true;
    }
  }

  ngOnInit() {
    this.userService.getEmitter().subscribe((data) => {

      if (data.length === 1) {
        this.loggedIn = true;
        this.accountDisp = false;
        this.user = data[0].user_first_name;
        this.userId = data[0].user_name;

        const storeSession = {
          user_id: this.userId,
          user: this.user,
          location: 'test',
          cuisine: 'test',
        };
        this.local.store('storeSession', storeSession);
        this.favorite.setName(this.userId);
        this.userService.isLoggedIn = true;

      } else {
        this.user = null;
        this.userService.isLoggedIn = false;
      }
    });
  }
  reset() {
    this.local.clear();
    window.location.reload();
    this.loggedIn = false;
    this.accountDisp = true;
    this.userService.isLoggedIn = false;
  }

}




