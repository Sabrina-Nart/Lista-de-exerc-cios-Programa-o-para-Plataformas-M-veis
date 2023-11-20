import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio4Page } from './exercicio4.component';

const routes: Routes = [
  {
    path: '',
    component: Exercicio4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio4PageRoutingModule {}
