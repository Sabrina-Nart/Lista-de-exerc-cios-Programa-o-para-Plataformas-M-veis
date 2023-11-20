import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio5PageRoutingModule } from './exercicio5-routing.module';

import { Exercicio5Page } from './exercicio5.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio5PageRoutingModule
  ],
  declarations: [Exercicio5Page]
})
export class Exercicio5PageModule {}
