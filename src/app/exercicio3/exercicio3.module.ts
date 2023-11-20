import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio3PageRoutingModule } from './exercicio3-routing.module';

import { Exercicio3Page } from './exercicio3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio3PageRoutingModule
  ],
  declarations: [Exercicio3Page]
})
export class Exercicio3PageModule {}
