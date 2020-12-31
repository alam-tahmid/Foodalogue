import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  size: any;

  constructor(private userSevice: UserService, private router: Router) { }

  ngOnInit() {
  }

  userSignUp(formData) {
    this.username = formData.email;

    this.userSevice.setUser(this.username, formData.firstName, formData.lastName, formData.email, formData.password).then(
      (data: any) => {

        if (data != null) {

          this.router.navigate(['login']);

        }        else {
          window.alert('Username already exists');

        }
      });

  }

}
