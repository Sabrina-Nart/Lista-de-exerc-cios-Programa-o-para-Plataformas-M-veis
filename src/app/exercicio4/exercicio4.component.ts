import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.scss'],
})
export class Exercicio4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item: string = '';
  listaItens: { texto: string; concluido: boolean }[] = [];

  adicionar() {
    if (this.item != '') {
      this.listaItens.push({ texto: this.item, concluido: false });
      this.item = '';
    }
  }

  remover(i: number) {
    this.listaItens.splice(i, 1);
  }

  marcarConcluido(i: number) {
    this.listaItens[i].concluido = !this.listaItens[i].concluido;
  }
}
