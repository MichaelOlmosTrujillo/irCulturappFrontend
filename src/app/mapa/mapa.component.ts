import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let L;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    let botonCerrarInfo = document.getElementById("botonCerrarInfo");
    var mymap = L.map('mapid').setView([4.7652, -74.0824], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWljaGFlbG9sbW9zdHJ1amlsbG8iLCJhIjoiY2tneWNyOXdhMGNqaTJ1bXNjZ2cxendoYiJ9.bCeZFg_DZa2f9kLkrj9bTw'
    }).addTo(mymap);
    var mapaIcono = L.icon({
      iconUrl: '../../assets/images/logo/logo-mapa-03.png',
      // shadowUrl:'./images/mapa/leaf-shadow.png',
      iconSize: [40, 45],
      shadowSize: [50, 64],
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // point of the shadow which will correspond to marker's location
      popupAnchor: [-3, -76]
    })
    var sanMiguelStudio = L.marker([4.7569948, -74.1176255], { icon: mapaIcono }).addTo(mymap);
    var mapaIcon = L.Icon.extend({
      options: {
        // shadowUrl: './images/mapa/leaf-shadow.png',
        iconSize: [60, 90],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    })
    L.icon = function (opciones) {
      return new L.Icon(opciones);
    };

    let escuelaPopularManoAbierta = L.marker([4.7590635, -74.0738686], { icon: mapaIcono }).addTo(mymap);
    let reinaldoCastro = L.marker([4.737955422027326, -74.08757205941103], { icon: mapaIcono }).addTo(mymap);
    let andresJulianAlvarezBernal = L.marker([4.747819565617817, -74.10042975045386], { icon: mapaIcono }).addTo(mymap);
    function desplegarSanMiguelStudio() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire(
        {
          title: 'San Miguel Studio',
          html: `<div class="card">
          <a href="#">
            <img src="../../../assets/images/agentesCulturales/SanMiguel/TomasSanmiguelLogo.jpg" class="card-img-top"
              alt="ReinaldoCastro">
          </a>

          <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <h5>Descripción</h5>
              <p> Ubicado en suba, brinda servicios como la composición, grabación, mezcla y producción de diferentes
                géneros urbanos. Entre ellos el rap, trap, regueton, drill, Air&b, Dembow, etc. Junto con la producción
                visual, hace de la producción un algo integro y muy completo. </p>
            </div>
            <div>
              <h5>Link de Contacto</h5>
              <a href="https://www.instagram.com/sanmiguelstudios/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div>
              <h5>Dirección</h5>
              <p>KRA 147 NO 150 - 26 ETAPA </p>
            </div>
           
          </div>
        </div>`,
          confirmButtonText: 'Cerrar',
          background: '#FFF4DE'

        }
      );
    }

    function desplegarEscuelaPopularManoAbierta() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire(
        {
          title: 'Escuela Popular Mano Abierta',
          html: `<div class="card">
          <a href="#">
            <img
              src="../../../assets/images/agentesCulturales/EscuelaPopularManoAbierta/EscuelaPopularManoAbiertaModificada.jpg"
              class="card-img-top" alt="EscuelaPopularManoAbierta">
          </a>

          <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <h5>Descripción</h5>
              <p> El componente de producción musical se establece bajo el nombre de SUBA JOVEN el cual es el medio
                audiovisual de la escuela popular mano abierta, brindando los servicios de grabación mezcla y master de
                canciones, creaccion de beats o instrumentales. </p>
            </div>
            <div>
              <h5>Link de Contacto</h5>
              <p>
                escuelapopularmanoabierta@gmail.com
              </p>
              <br>

              <a href="https://www.facebook.com/Escuelapopularmanoabierta/" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div>
              <h5>Número de contacto</h5>
              <p>Cel: 305 809 6419</p>
              <h5>Dirección</h5>
              Carrera 90 # 135 b 23 (Casa de juventud Diego Felipe Becerra)
            </div>
            
          </div>
        </div>`,
          confirmButtonText: 'Cerrar',
          background: '#FFF4DE'
        }
      );
    }

    function desplegarReinaldoCastro() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire(
        {
          title: 'Reinaldo Castro',
          html: `<div class="card">
          <a href="#">
            <img
              src="../../../assets/images/agentesCulturales/ReinaldoCastro/ReinaldoCastroLogoReinaldoCastroArtista.jpg"
              class="card-img-top" alt="ManoAbierta">
          </a>

          <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <h5>Descripción</h5>
              <p> El componente de producción musical se establece bajo el nombre de SUBA JOVEN el cual es el medio
                audiovisual de la escuela popular mano abierta, brindando los servicios de grabación mezcla y master de
                canciones, creaccion de beats o instrumentales. </p>
            </div>
            <div>
              <h5>Link de Contacto</h5>
              <a href="http://www.reinaldocastro.tk/" target="_blank">
                ¡Mi sitio web! </a> <br>
              <a href="https://www.instagram.com/reinaldocastro3" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/reinaldocastro3" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/reinaldocastro3" target="_blank">
                <i class="fab fa-twitter"></i>
              </a><br>
              <p>reinaldocastro3@gmail.com</p>

            </div>
            <div>
              <h5>Número de contacto</h5>
              <p>Tel: 6925083</p>
              <p>Cel: 301 729 5503</p>
              <h5>Dirección Administrativa</h5>
              <p>Cl. 139 #95b-18, Bogotá</p>
              <h5>Dirección Artistica</h5>
              <p>Cra. 90 ##147-44, Bogotá (Casa de la Cultura de Suba)</p>
            </div>
            
          </div>
        </div>`,
          confirmButtonText: 'Cerrar',
          background: '#FFF4DE'
        }
      );
    }

    function desplegarAndresJulianAlvarezBernal() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire(
        {
          title: 'Reinaldo Castro',
          html: ` <div class="card">
          <a href="#">
            <img
              src="../../../assets/images/agentesCulturales/TARJETARUIDOSONOROJulianAlvarez/TARJETARUIDOSONOROJulianAlvarezModificada.jpg"
              class="card-img-top" alt="ManoAbierta">
          </a>

          <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <h5>Descripción</h5>
              <p>
                la orquesta del ruido sonoro nace como una propuesta interdisciplinar desde la música, el teatro
                gestual, clown y circo, diseñada para niñ@s y familias de nuestra ciudad.

                Este Encuentro artístico pretende acercar a los participantes a un ejercicio con el rui do, ritmo,
                composición y acompañamiento de diferentes géneros musicales, que
                van desde la música gitana (gipsy) y sus diversos sonidos de las regiones ROM, hasta ritmos como La
                Cumbia, La Carranga y el funk </p>
            </div>
            <div>
              <h5>Link de Contacto</h5>

              <a href="https://www.facebook.com/ELRUIDOSONORO" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a><br>

              <p >orquestaderuidosonoro@gmail.com</p>

            </div>
            <div>
              <h5>Número de contacto</h5>
              <p>Tel: 8831005</p>
              <p>Cel: 321 755 8379</p>
              <h5>Dirección Administrativa</h5>
              <p>Carrera 110 a #143-39</p>
              <h5>Dirección Artistica</h5>
              <p>Carrera 110 a #143-39</p>
            </div>
            
          </div>
        </div>`,
          confirmButtonText: 'Cerrar',
          background: '#FFF4DE'
        }
      );
    }
    sanMiguelStudio.on('click', desplegarSanMiguelStudio);
    escuelaPopularManoAbierta.on('click', desplegarEscuelaPopularManoAbierta);
    reinaldoCastro.on('click', desplegarReinaldoCastro);
    andresJulianAlvarezBernal.on('click', desplegarAndresJulianAlvarezBernal);




  }

}
