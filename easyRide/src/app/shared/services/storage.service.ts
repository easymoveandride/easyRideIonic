import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage : Storage) { }

  public setIsDriver({isDriver}: { isDriver: boolean}) {
    this.storage.set('isDriver', isDriver);
  }

  public getIsDriver() {
    return this.storage.get('isDriver');
  }

  public setMosqueId({mosqueId}: { mosqueId: string}) {
    this.storage.set('mosqueId', mosqueId);
    console.log(mosqueId)
  }
}
