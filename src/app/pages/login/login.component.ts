import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login !:UserLogin;

  loginForm: FormGroup = new FormGroup({
    nick: new FormControl(''),
    password: new FormControl(''),
  });

 //userPost = new UserLogin(username, password);



  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    console.log(this.loginForm.value);
  }

  submit() {
    this.login = this.loginForm.value
    this.userService.login(this.login).subscribe()

  }




}
