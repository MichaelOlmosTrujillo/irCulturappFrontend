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
                <p> AQUÍ VA EL TEXTO</p>
            </div> 
          </div>
        </div>`,
        confirmButtonText: 'Bienvenido',
        background: '#FFF4DE'

      }
    )
  }


}
