import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConsultaComponent } from './detalle-consulta.component';

describe('DetalleConsultaComponent', () => {
  let component: DetalleConsultaComponent;
  let fixture: ComponentFixture<DetalleConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleConsultaComponent]
    });
    fixture = TestBed.createComponent(DetalleConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
