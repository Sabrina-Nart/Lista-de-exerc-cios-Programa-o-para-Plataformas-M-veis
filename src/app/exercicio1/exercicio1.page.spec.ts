import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio1Page } from './exercicio1.component';

describe('Exercicio1Page', () => {
  let component: Exercicio1Page;
  let fixture: ComponentFixture<Exercicio1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercicio1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
