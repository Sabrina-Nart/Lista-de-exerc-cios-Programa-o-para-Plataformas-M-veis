import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.scss'],
})

export class Exercicio3Page implements OnInit {

  altura: any = '';
  peso: any = '';
  cor: String = '';
  mensagem = '';

  constructor() { }

  ngOnInit() {
  }

  calcularImc() : void {

    if (this.altura == '' || this.peso == '') {

      this.mensagem = 'Digite valores válidos para ser possível realizar seu IMC';
      this.cor = 'danger';

    } else {

      let imc = this.peso / (this.altura * this.altura);

        if (imc < 16) {
        this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` +  'Magreza grave';
        this.cor = 'danger';

        } else if (imc >= 16 && imc < 17) {
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Magreza moderada';
          this.cor = 'warning';

        } else if (imc >= 17 && imc < 18.5) {
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Magreza leve';
          this.cor = 'medium';

        } else if (imc >= 18.5 && imc < 25) {
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Saudável';
          this.cor = 'success';

        } else if (imc >= 25 && imc < 30) {
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Sobrepeso';
          this.cor = 'medium';

        } else if (imc >= 30 && imc < 35) {
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Obesidade Grau I';
          this.cor = 'warning';

        } else if (imc >= 35 && imc < 40) {
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Obesidade Grau II (severa)';
          this.cor = 'danger';

        } else if (imc >= 40){
          this.mensagem = 'Peso: ' + imc + `\n` + '-' + `\n` + 'Obesidade Grau III (mórbida)';
          this.cor = 'danger';
        }
    }
  }
}
