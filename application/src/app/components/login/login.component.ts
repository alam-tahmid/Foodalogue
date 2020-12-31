import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displayName = false;
  notLoggedin = false;
  user: any;
  constructor(private userSevice: UserService, private router: Router) { }

  ngOnInit() {
  }
  userLogin(formData) {

    this.userSevice.getLogin(formData.username, formData.password).then(
      (data) => {

        if (data != null) {
          this.userSevice.fireIsLoggedIn.emit(data);
          this.router.navigate(['home']);
          this.displayName = true;
          this.user = data;
        }    else {
          this.notLoggedin = true;
          window.alert('Username/Password Incorrect');
          this.userSevice.fireIsLoggedIn.emit(data);
          this.user = null;
        }
      });
  }

}
