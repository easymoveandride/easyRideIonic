import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FromWherePage } from './from-where.page';
import { MosqueComponent } from '../mosque/mosque.component';

const routes: Routes = [
  {
    path: '',
    component: FromWherePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FromWherePage, MosqueComponent]
})
export class FromWherePageModule {}
