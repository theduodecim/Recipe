import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) {}

  ngOnInit() {
  }

  OnsignInUser(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signInUser(email, password)

  }

}
