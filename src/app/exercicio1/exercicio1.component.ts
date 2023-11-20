import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.scss'],
})

export class Exercicio1Page implements OnInit {

  distancia: any = '';
  litros: any = '';
  mensagem = '';

  constructor() { }

  ngOnInit() {}

    calcularQuilometros(): void {

        if(this.distancia == '' || this.litros == ''){

           this.mensagem = 'Digite valores válidos para ser possível o cálculo da quilometragem percorrida';

        } else {

          let desempenho = this.distancia / this.litros;

          if(desempenho > 13){

            this.mensagem = 'Veículo Econômico: ' + ' - ' +  desempenho + ' ' + 'Km/l';

          } else if (desempenho >= 10 && desempenho <= 13) {
              this.mensagem = 'Veículo Normal: ' + ' - ' +  desempenho + ' ' + 'Km/l';

          } else if (desempenho < 10){

            this.mensagem = 'Veículo Gastador ' + ' - ' + desempenho + ' ' + 'Km/l';
          }
        }
    }
}
