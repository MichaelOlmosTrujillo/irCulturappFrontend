import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-centro-cultural-generales',
  templateUrl: './modal-centro-cultural-generales.component.html',
  styleUrls: ['./modal-centro-cultural-generales.component.css'],
})
export class ModalCentroCulturalGeneralesComponent implements OnInit {
  constructor() {}
  agentesCulturalesDatos = [
    {
      nombre: 'Agente Cultural',
      descripcion:
        'Aquí encontrarás talleres de pintura, danza, teatro, música y además podrás asistir a eventos',
      linkContacto: 'Visitame en mi espacio',
      direccion: '...',
      productoServicio: 'Estos son mis productos y servicios',
    },
  ];
  ngOnInit(): void {}
}
