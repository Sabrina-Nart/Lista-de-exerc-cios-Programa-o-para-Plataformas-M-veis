import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Exercicio4Page } from './exercicio4.component';

describe('Exercicio4Page', () => {
  let component: Exercicio4Page;
  let fixture: ComponentFixture<Exercicio4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercicio4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
