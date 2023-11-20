import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio2Page } from './exercicio2.component';

const routes: Routes = [
  {
    path: '',
    component: Exercicio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio2PageRoutingModule {}
