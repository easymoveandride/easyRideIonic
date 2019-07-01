import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from './../../shared/class/user';
import {UserService} from './../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logControl: FormControl;
  passControl: FormControl;
  userFormGroup: FormGroup;

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this._buildForm();
  }

  onSubmit(): void {
    const data = {login: this.userFormGroup.get('log').value, password: this.userFormGroup.get('pass').value};
    if(data.login && data.password){
      this.user.login(data);
      this.router.navigate(['./selection']);
    }
    // .then((res) => {
    //     this.loading = false;

    //     if (res) {
    //         console.log('HKR onSubmit test ' + res);
    //         this.router.navigate(['./listTicket']);
    //     } else {
    //         this.loading = false;
    //     }
    // })
    // .catch((err) => {
    //   this.loading = false;
    // });

    this._buildForm();
}

  private _buildForm() {
    this.logControl = new FormControl(null, Validators.required);
    this.passControl = new FormControl(null, Validators.required);

    this.userFormGroup = new FormGroup({
        log: this.logControl,
        pass: this.passControl
    });

  }

}
