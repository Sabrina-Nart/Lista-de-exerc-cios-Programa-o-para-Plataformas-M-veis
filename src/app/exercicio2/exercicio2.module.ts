import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio2PageRoutingModule } from './exercicio2-routing.module';

import { Exercicio2Page } from './exercicio2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio2PageRoutingModule
  ],
  declarations: [Exercicio2Page]
})

export class Exercicio2PageModule {}
