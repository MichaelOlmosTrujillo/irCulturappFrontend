import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiciosPorCadaFrenteComponent } from './productos-servicios-por-cada-frente.component';

describe('ProductosServiciosPorCadaFrenteComponent', () => {
  let component: ProductosServiciosPorCadaFrenteComponent;
  let fixture: ComponentFixture<ProductosServiciosPorCadaFrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiciosPorCadaFrenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosServiciosPorCadaFrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
