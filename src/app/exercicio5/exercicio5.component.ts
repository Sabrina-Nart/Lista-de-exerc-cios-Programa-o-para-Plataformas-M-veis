import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.scss'],
})
export class Exercicio5Page implements OnInit {

  mensagem = '';
  numero1: any = '';
  numero2: any = '';
  operacao: any = '';

  constructor() { }

  ngOnInit() {
  }

  calcular(): void {

    if(this.numero1 == '' || this.numero2 == ''){

      this.mensagem = 'Digite valores válidos para ser possível o cálculo';
    }

    let resultado = eval(this.numero1 + this.operacao + this.numero2);

    this.mensagem = 'Resultado: ' + resultado;
  }

  limpar(): void {
    this.mensagem = '';
    this.numero1 = '';
    this.numero2 = '';
    this.operacao = '';
  }
}
