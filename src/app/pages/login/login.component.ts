import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login !:UserLogin;
  token !: String;

  loginForm: FormGroup = new FormGroup({
    nick: new FormControl(''),
    password: new FormControl(''),
  });

 //userPost = new UserLogin(username, password);



  constructor(private userService: UserService,
    private router: Router) {
   }

  ngOnInit(): void {
    console.log(this.loginForm.value);
  }

  submit() {
    this.login = this.loginForm.value
    this.userService.login(this.login).subscribe(p=>{
      localStorage.setItem('token',p.token);
      this.router.navigate(['/posts']);});


  }

}
