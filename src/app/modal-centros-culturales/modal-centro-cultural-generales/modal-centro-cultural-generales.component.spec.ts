import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentroCulturalGeneralesComponent } from './modal-centro-cultural-generales.component';

describe('ModalCentroCulturalGeneralesComponent', () => {
  let component: ModalCentroCulturalGeneralesComponent;
  let fixture: ComponentFixture<ModalCentroCulturalGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCentroCulturalGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentroCulturalGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
