import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../db.service';
import { environment } from '../../environments/environment';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  userName: any = '';
  password: any = '';
  retUrl: any = '';
  retLogin: any = 'Login';
  userDetails: any = '';
  userInfo: any;
  loginStatus: any;
  users: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private db: DbService,
    private logger:NGXLogger
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, nameValidator]],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  ngOnInit() {}

  onLogin() {
    const name = this.myForm.get('name')?.value;
    const password = this.myForm.get('password')?.value;
if(!name || !password)
{
  alert('Please Enter Crendentials');
  return;
}

    this.db.getUser().subscribe((data) => {
      this.userDetails = data;
      const userInfo = this.userDetails.find((users: any) => users.name === name);

      if (userInfo && password === userInfo.password) {
        this.loginStatus = this.db.login(userInfo);
        this.logger.error("Login Successful");
        console.log('login status = ' + this.loginStatus);

        this.db.addCurrentUser(userInfo).subscribe((data) => {
          console.log('Added Current User = ' + userInfo.name);

        });

        localStorage.setItem('name', name);
        this.router.navigate(['/home']);

      }
      else if(this.myForm.value.name=== environment.adminName && this.myForm.value.password === environment.adminPassword){
        alert("Welcome Admin");
        console.log(this.myForm.value.name)
        this.router.navigate(['/adminhome']);

      }
       else {
        alert('Username or Password is Incorrect! Try again.');
        console.log('Login failed');
        window.location.reload();
      }



    });
  }
}

function nameValidator(control: FormControl): { [key: string]: boolean } | null {
  const namePattern = environment.namePattern;
  const isValid = namePattern.test(control.value);
  return isValid ? null : { 'invalidUsername': true };
}

function passwordValidator(control: FormControl): { [key: string]: boolean } | null {
  const minLength = environment.minLength;
  const isValid = control.value.length >= minLength;
  return isValid ? null : { 'invalidPassword': true };
}
