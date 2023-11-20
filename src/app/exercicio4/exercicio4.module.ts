import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio4PageRoutingModule } from './exercicio4-routing.module';

import { Exercicio4Page } from './exercicio4.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio4PageRoutingModule
  ],
  declarations: [Exercicio4Page]
})
export class Exercicio4PageModule {}
