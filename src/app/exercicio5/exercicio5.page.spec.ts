import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Exercicio5Page } from './exercicio5.component';

describe('Exercicio5Page', () => {
  let component: Exercicio5Page;
  let fixture: ComponentFixture<Exercicio5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercicio5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
