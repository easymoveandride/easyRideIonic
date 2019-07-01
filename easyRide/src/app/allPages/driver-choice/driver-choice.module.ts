import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DriverChoicePage } from './driver-choice.page';

const routes: Routes = [
  {
    path: '',
    component: DriverChoicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DriverChoicePage]
})
export class DriverChoicePageModule {}
