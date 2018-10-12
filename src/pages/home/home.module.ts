import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,

  ],
  declarations: [
    HomePage,
  ]
})
export class HomeModule { }
