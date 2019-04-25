import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Animations } from 'src/app/utils/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [Animations.fadeInFadeOut]
})
export class SignInComponent implements OnInit {
  showPassword = false;
  signInForm: FormGroup;

  constructor() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signIn() {
    if (this.signInForm.invalid) return;

    const [email, pw] = [this.signInForm.get('email').value, this.signInForm.get('password').value];
    console.log(`${email} : ${pw}`);
    // TODO: Add sgin in logic
  }
}
