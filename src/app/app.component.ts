import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testauth';
  username: any
  password: any

  constructor(private auth: AuthService) {

  }
  login() {
    console.log()
    let data = {
      username: this.username,
      password: this.password,
    }

    this.auth.loginUser(data).subscribe((res: any) => {
      if (res) {
        alert("user login")
      }
      localStorage.setItem("token", res.token)
    })

  }

  getproduct() {
    if (localStorage.getItem("token")) {
      this.auth.getproduct().subscribe((res) => {
        console.log(res)
      })
    }
  }

}
