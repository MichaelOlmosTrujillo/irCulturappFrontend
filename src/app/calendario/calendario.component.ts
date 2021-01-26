import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderizarCalendario();
  }

  fecha = new Date();
  //Lanzamiento de irCulturApp
  lanzamientoIrCulturApp = new Date('December 4, 2020 00:00:00');
  //Huerta Comunitaria Angelita
  huertaCominutariaAngelita = new Date('December 20, 2020');
  //Huerta Comunitaria Angelita Velitas
  huertaCominutariaAngelitaVelitas = new Date('December 7, 2020');
  ColectivoSubaNativaEvento = new Date('December 5, 2020');

  // mostrarConsola(){
  //   console.log(this.lanzamientoIrCulturApp.getFullYear, this.lanzamientoIrCulturApp.getMonth + " mes y año del lanzamiento de la app")
  // }

  // Renderizar el calendario
  renderizarCalendario() {
    // "fecha.setMonth(3);" Especifica que el mes actual sea dado manualmente
    // Se establece para determinar el primer día del mes.
    let diaLanzamiento = this.lanzamientoIrCulturApp.getDate();
    let diaHuertaComunitariaAngelita = this.huertaCominutariaAngelita.getDate();
    let diaHuertaCominutariaAngelitaVelitas = this.huertaCominutariaAngelitaVelitas.getDate();
    let diaColectivoSubaNativaEvento = this.ColectivoSubaNativaEvento.getDate();
    // console.log(diaLanzamiento + " día de lanzamiento de irCulturApp");
    this.fecha.setDate(1);
    // Indice del primer día del mes actual
    const indicePrimerDia = this.fecha.getDay();
    console.log('indice del primer día del mes: ', indicePrimerDia);
    // Indice del última día del mes actual
    const indiceUltimoDia = new Date(
      this.fecha.getFullYear(),
      this.fecha.getMonth() + 1,
      0
    ).getDay();
    console.log('Indice del último día del mes actual: ' + indiceUltimoDia);
    // Últimos días del mes
    const ultimosDias = 7 - indiceUltimoDia - 1;
    //Opciones para obtener la fecha en español
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const diasDelMes = document.getElementById('dias');
    // console.log(diasDelMes);
    //Último día del mes actual
    const ultimoDia = new Date(
      this.fecha.getFullYear(),
      this.fecha.getMonth() + 1,
      0
    ).getDate();
    // Último día del mes anterior al actual
    const ultimoDiaMesAnt = new Date(
      this.fecha.getFullYear(),
      this.fecha.getMonth(),
      0
    ).getDate();
    console.log('Último día del mes anterior: ' + ultimoDiaMesAnt);
    // Meses
    const meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    // Obtener mes del año
    document.getElementById('mes').innerHTML = meses[this.fecha.getMonth()];
    //Obtener fecha actual al español
    document.getElementById(
      'fechaActual'
    ).innerHTML = new Date().toLocaleDateString('es-ES', opciones);

    // Creando los días del mes actual

    let dias = '';
    // Últimos cinco días del mes anterior
    for (let x = indicePrimerDia; x > 0; x--) {
      dias += `<div class = "prev-fecha">
    ${ultimoDiaMesAnt - x + 1}
    </div>
    `;
    }

    //Subrayar el día actual del mes actual
    //(i === new Date().getDate() || i === (new Date().getDate()) + 1 ) &&
    this.fecha.getMonth() === new Date().getMonth();
    for (let i = 1; i <= ultimoDia; i++) {
      if (
        i === diaLanzamiento &&
        this.lanzamientoIrCulturApp.getMonth() == this.fecha.getMonth() &&
        this.fecha.getFullYear() == this.lanzamientoIrCulturApp.getFullYear()
      ) {
        dias += `
        <div class = "hoy posicionRelativa">
        ${i}
        <div data-toggle= "modal" data-target = "#evento5Dic" class = "posicionAbsoluta">
           <img src="../../assets/images/logo/logo-mapa-03.png" class="logoEventoAgendario" alt="logoEventoAgendario">
        </div>
        </div>
        `;
      } else if (
        i === diaHuertaComunitariaAngelita &&
        this.huertaCominutariaAngelita.getMonth() == this.fecha.getMonth() &&
        this.fecha.getFullYear() == this.huertaCominutariaAngelita.getFullYear()
      ) {
        dias += `
        <div class = "hoy posicionRelativa">
        ${i}
        <div data-toggle= "modal" data-target = "#huertaCominutariaAngelitaEvent" class = "posicionAbsoluta">
           <img src="../../assets/images/agentesCulturales/PortadaAgentesCulturales/8LAC.PNG" class="logoEventoAgendario" alt="huertaComunitariaAngelita">
        </div>
        </div>
        `;
      }else if (
        i === diaHuertaCominutariaAngelitaVelitas &&
        this.huertaCominutariaAngelitaVelitas.getMonth() == this.fecha.getMonth() &&
        this.fecha.getFullYear() == this.huertaCominutariaAngelitaVelitas.getFullYear()
      ) {
        dias += `
        <div class = "hoy posicionRelativa">
        ${i}
        <div data-toggle= "modal" data-target = "#huertaComunitariaAngelitaVelitas" class = "posicionAbsoluta">
           <img src="../../assets/images/agentesCulturales/PortadaAgentesCulturales/8LAC.PNG" class="logoEventoAgendario" alt="huertaComunitariaAngelitaVelitas">
        </div>
        </div>
        `;
      } else if (
        i === diaColectivoSubaNativaEvento &&
        this.ColectivoSubaNativaEvento.getMonth() == this.fecha.getMonth() &&
        this.fecha.getFullYear() == this.ColectivoSubaNativaEvento.getFullYear()
      ) {
        dias += `
        <div class = "hoy posicionRelativa">
        ${i}
        <div data-toggle= "modal" data-target= "#ColectivoSubaNativaEvento5Dic" class = "posicionAbsoluta">
           <img src="../../assets/images/agentesCulturales/PortadaAgentesCulturales/20LAC.PNG" class="logoEventoAgendario" alt="ColectivoSubaNativaEvento">
        </div>
        </div>
        `;
      }
      
      else {
        dias += `<div>
        ${i}
        </div>
        `;
      }
    }

    //Últimos días del mes actual

    for (let j = 1; j <= ultimosDias; j++) {
      dias += `<div class = "siguiente-fecha">
    ${j}
    </div>
    `;
      diasDelMes.innerHTML = dias;
    }
  }

  // renderizarCalendario();

  // Mes anterior

  mesAnterior() {
    this.fecha.setMonth(this.fecha.getMonth() - 1);
    this.renderizarCalendario();
  }

  // Mes siguiente

  mesSiguiente() {
    this.fecha.setMonth(this.fecha.getMonth() + 1);
    this.renderizarCalendario();
  }
}
