import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../db.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private db: DbService , private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const values = this.signupForm.value;
      if (values.password !== values.confirmPassword) {
        alert('Passwords did not match. Please make sure both passwords are the same.');
        return;
      }
      this.db.adduser(values).subscribe(
        (response) => {
          alert('Signup successful!');

          this.signupForm.reset();
          this.router.navigate(['/login']);
        },
        error => {
          alert('An error occurred during signup. Please try again later.');
          console.error(error);
        }
      );
    } else {
      alert('Please enter all the required credentials.');
    }
  }
}
