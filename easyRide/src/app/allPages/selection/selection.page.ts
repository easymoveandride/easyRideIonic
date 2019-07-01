import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from './../../shared/services/storage.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {

  constructor(private router: Router,private storage: StorageService) { }

  ngOnInit() {
  }

  passengerAction(){
    console.log("passenger");
    const data = {isDriver: false};
    this.storage.setIsDriver(data);
    this.router.navigate(['./from-where']);
  }

  driverAction(){
    console.log("driver");
    const data = {isDriver: true};
    this.storage.setIsDriver(data);
    this.router.navigate(['./from-where']);
  }

}
