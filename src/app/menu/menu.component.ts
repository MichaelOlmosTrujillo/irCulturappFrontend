import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }
  quienesSomos() {
    Swal.fire(
      {
        title: "Quienes Somos",
        html: `<div class="card">
          <a href="#">
            <img src="../../../assets/images/logo/logo-mapa-03.png" class="card-img-top"
              alt="logoIrCulturApp">
          </a>

          <div class="card-body d-flex justify-content-between flex-column">
            <div>
                <p> <strong>IRCULTUR-APP</strong> es una propuesta tecnológica centrada en el reconocimiento y la reactivación del sector cultural de la localidad de Suba, en donde se busca visibilizar  artistas, colectivos, centros y demás procesos culturales. 
                La aplicación WEB IRCULTUR-APP , pretende ser una vitrina y un directorio cultural de toda la movida de este territorio, así que acoge diferentes frentes culturales, tales como: medioambiente, medios de comunicación, bibliotecas y 
                clubes literarios, artes escénicas, dancísticas y musicales, artes plásticas, visuales y audiovisuales, lenguajes artísticos interdisciplinares, centros y organizaciones comunitarios, entre otros. Es una aplicación web "de" y "para" 
                la comunidad, ya que aquí puedes conocer y divulgar procesos, actividades, eventos, servicios y productos culturales. </p>
            </div> 
          </div>
        </div>`,
        confirmButtonText: 'Bienvenido',
        background: '#FFF4DE'

      }
    )
  }


}
