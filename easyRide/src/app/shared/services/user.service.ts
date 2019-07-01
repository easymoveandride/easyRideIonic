import { Injectable } from '@angular/core';
import {User, UserInfosInterface} from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public login({login, password}: { login: string, password: string }) {
    console.log('login : ' + login + ' password : ' + password);
  }

  public registration({firstName, lastName, login, password}: { firstName: string, lastName: string, login: string, password: string }) {
    console.log('fistName : ' + firstName + ' lastName : ' + lastName + ' login : ' + login + ' password : ' + password);
  }
}
 