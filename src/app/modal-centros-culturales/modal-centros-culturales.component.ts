import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-centros-culturales',
  templateUrl: './modal-centros-culturales.component.html',
  styleUrls: ['./modal-centros-culturales.component.css'],
})
export class ModalCentrosCulturalesComponent implements OnInit {
  constructor() {}
  listaAgentesCulturales = [
    {
      nombre: 'San Miguel Studios',
      id: 'sanMiguelStudios'
    },
  ];
  listaAgentesCulturalesGenerales=[
    {
      nombre:'Agente Cultural',
    },
    {
      nombre:'Agente Cultural',
    },
    {
      nombre:'Agente Cultural',
    },
  ]
  ngOnInit(): void {
   
  }
}
