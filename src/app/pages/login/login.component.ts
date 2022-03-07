import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

 //userPost = new UserLogin(username, password);


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submit() {
    this.userService.loginUser(this.login).subscribe()

  }




}
