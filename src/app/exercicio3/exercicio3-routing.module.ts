import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio3Page } from './exercicio3.component';

const routes: Routes = [
  {
    path: '',
    component: Exercicio3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio3PageRoutingModule {}
