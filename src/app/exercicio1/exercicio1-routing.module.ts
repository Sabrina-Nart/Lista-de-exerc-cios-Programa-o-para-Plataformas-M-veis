import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio1Page } from './exercicio1.component';

const routes: Routes = [
  {
    path: '',
    component: Exercicio1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio1PageRoutingModule {}
