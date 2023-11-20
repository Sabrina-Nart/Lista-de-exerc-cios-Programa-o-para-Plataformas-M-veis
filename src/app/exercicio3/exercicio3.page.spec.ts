import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Exercicio3Page } from './exercicio3.component';

describe('Exercicio3Page', () => {
  let component: Exercicio3Page;
  let fixture: ComponentFixture<Exercicio3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercicio3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
