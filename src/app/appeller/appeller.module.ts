import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { IonicModule } from '@ionic/angular';

import { AppellerPage } from './appeller.page';

const routes: Routes = [
  {
    path: '',
    component: AppellerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppellerPage],
  providers: [CallNumber]
})
export class AppellerPageModule {}
