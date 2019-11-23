import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ConseilPage } from './conseil.page';
import { LeConseilComponent } from './le-conseil/le-conseil.component';
import { Themes } from './themes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConseilPage
      }
    ])
  ],
  declarations: [ConseilPage, LeConseilComponent],
  entryComponents: [
    LeConseilComponent,
  ],
  providers: [Themes]
})
export class ConseilPageModule {}
