import { Component, OnInit } from '@angular/core';
import { MOCK_MOSQUE } from '../mock/mosque.mock';
import { Router } from '@angular/router';
import {StorageService} from './../../../shared/services/storage.service';

@Component({
  selector: 'app-from-where',
  templateUrl: './from-where.page.html',
  styleUrls: ['./from-where.page.scss'],
})
export class FromWherePage implements OnInit {
  mosqueList: any;
  mosqueListLoaded: any;

  constructor(public storage : StorageService, private router: Router) {
    this.mosqueList = MOCK_MOSQUE;
    console.log('HKR ' + this.mosqueList);
   }

  ngOnInit() {
    this.mosqueListLoaded = this.mosqueList;
  }

  initializeItems(): void {
    this.mosqueList = this.mosqueListLoaded;
  }

  onSearch(event){
    console.log(event.target.value);
    console.log(event.srcElement.value);
    this.initializeItems();

    const serachItem = event.srcElement.value;

    if(!serachItem){
      return;
    }

    this.mosqueList = this.mosqueList.filter(currentMosque => {
      if (currentMosque.name && serachItem) {
        if (currentMosque.name.toLowerCase().indexOf(serachItem.toLowerCase()) > -1 || currentMosque.address.toLowerCase().indexOf(serachItem.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
      });
  }

  onSelect(mosqueId){
    const data = {mosqueId : mosqueId};
    this.storage.setMosqueId(data);
    this.storage.getIsDriver().then((isDriver) =>{
      if(isDriver == true){
        this.router.navigate(['./cars']);
      }else{
        this.router.navigate(['./driver-choice']);
      }
    });
  }

}
