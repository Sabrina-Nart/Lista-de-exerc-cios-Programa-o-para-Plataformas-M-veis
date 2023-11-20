import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { Exercicio1PageModule } from '../exercicio1/exercicio1.module';
import { Exercicio2PageModule} from '../exercicio2/exercicio2.module';
import { Exercicio3PageModule } from '../exercicio3/exercicio3.module';
import { Exercicio4PageModule } from '../exercicio4/exercicio4.module';
import { Exercicio5PageModule } from '../exercicio5/exercicio5.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Exercicio1PageModule,
    Exercicio2PageModule,
    Exercicio3PageModule,
    Exercicio4PageModule,
    Exercicio5PageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
