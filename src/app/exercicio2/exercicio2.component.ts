import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.scss'],
})

export class Exercicio2Page implements OnInit {

  anoNascimento: any = '';
  idade: any = '';
  mensagem = '';

  constructor() { }

  ngOnInit() {
  }

  calcularIdade(): void {

    if (this.anoNascimento) {

      const anoAtual = new Date().getFullYear();
      this.idade = anoAtual - this.anoNascimento;

      if(this.idade <= 12) {
          this.mensagem = this.mensagem = 'Sua idade é: ' + this.idade + ' ano(s) e sua Classificação é: Criança';

      } else if (this.idade >= 13 && this.idade <= 17) {
          this.mensagem = this.mensagem = 'Sua idade é: ' + this.idade + ' ano(s) e sua Classificação é: Adolescente';

      } else if (this.idade >= 18 && this.idade <= 59){

        this.mensagem = this.mensagem = 'Sua idade é: ' + this.idade + ' ano(s) e sua Classificação é: Adulto';
      } else if (this.idade >= 60){

        this.mensagem = this.mensagem = 'Sua idade é: ' + this.idade + ' ano(s) e sua Classificação é: Idoso';
      }
    }
  }

  limpar(): void {
    this.mensagem = '';
    this.anoNascimento = '';
    this.idade = '';
  }
}

