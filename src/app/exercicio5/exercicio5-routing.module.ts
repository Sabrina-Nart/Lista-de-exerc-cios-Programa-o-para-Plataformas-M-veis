import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio5Page } from './exercicio5.component';

const routes: Routes = [
  {
    path: '',
    component: Exercicio5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio5PageRoutingModule {}
