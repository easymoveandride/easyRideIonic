import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  carNameControl: FormControl;
  numberOfPlacesControl: FormControl;
  departureTimeControl: FormControl;
  carFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this._buildForm();
  }

  onSubmit(): void {
    const data = {
      carName: this.carFormGroup.get('carName').value, 
      numberOfPlaces: this.carFormGroup.get('numberOfPlaces').value, 
      departureTime: this.carFormGroup.get('departureTime').value
    };
    
    if(data.carName && data.numberOfPlaces && data.departureTime){
      console.log(data);
      //this.user.login(data);
      //this.router.navigate(['./selection']);
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
    this.carNameControl = new FormControl(null, Validators.required);
    this.numberOfPlacesControl = new FormControl(null, Validators.required);
    this.departureTimeControl = new FormControl(null, Validators.required);

    this.carFormGroup = new FormGroup({
      carName: this.carNameControl,
      numberOfPlaces: this.numberOfPlacesControl,
      departureTime: this.departureTimeControl
    });

  }

}
