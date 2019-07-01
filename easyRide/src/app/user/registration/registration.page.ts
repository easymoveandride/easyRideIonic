import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  loginControl: FormControl;
  passwordControl: FormControl;
  userFormGroup: FormGroup;

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this._buildForm();
  }

  onSubmit(): void {
    const data = {
      firstName: this.userFormGroup.get('firstName').value, 
      lastName: this.userFormGroup.get('lastName').value, 
      login: this.userFormGroup.get('login').value, 
      password: this.userFormGroup.get('password').value
    };
    if(data.login && data.password){
      this.user.registration(data);
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
    this.firstNameControl = new FormControl(null, Validators.required);
    this.lastNameControl = new FormControl(null, Validators.required);
    this.loginControl = new FormControl(null, Validators.required);
    this.passwordControl = new FormControl(null, Validators.required);

    this.userFormGroup = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      login: this.loginControl,
      password: this.passwordControl
    });
  }
}
