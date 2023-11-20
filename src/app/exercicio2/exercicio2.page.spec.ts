import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio2Page } from './exercicio2.component';

describe('Exercicio2Page', () => {
  let component: Exercicio2Page;
  let fixture: ComponentFixture<Exercicio2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercicio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
