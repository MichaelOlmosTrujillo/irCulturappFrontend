import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let L;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let botonCerrarInfo = document.getElementById('botonCerrarInfo');
    var mymap = L.map('mapid').setView([4.7652, -74.0824], 13);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoibWljaGFlbG9sbW9zdHJ1amlsbG8iLCJhIjoiY2tneWNyOXdhMGNqaTJ1bXNjZ2cxendoYiJ9.bCeZFg_DZa2f9kLkrj9bTw',
      }
    ).addTo(mymap);
    var mapaIcono = L.icon({
      iconUrl: '../../assets/images/logo/logo-mapa-03.png',
      // shadowUrl:'./images/mapa/leaf-shadow.png',
      iconSize: [40, 45],
      shadowSize: [50, 64],
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // point of the shadow which will correspond to marker's location
      popupAnchor: [-3, -76],
    });
    var sanMiguelStudio = L.marker([4.7569948, -74.1176255], {
      icon: mapaIcono,
    }).addTo(mymap);
    var mapaIcon = L.Icon.extend({
      options: {
        // shadowUrl: './images/mapa/leaf-shadow.png',
        iconSize: [60, 90],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],
      },
    });
    L.icon = function (opciones) {
      return new L.Icon(opciones);
    };

    let escuelaPopularManoAbierta = L.marker([4.7590635, -74.0738686], {
      icon: mapaIcono,
    }).addTo(mymap);
    let reinaldoCastro = L.marker([4.737955422027326, -74.08757205941103], {
      icon: mapaIcono,
    }).addTo(mymap);
    let andresJulianAlvarezBernal = L.marker(
      [4.747819565617817, -74.10042975045386],
      { icon: mapaIcono }
    ).addTo(mymap);
    let ColectivoQuizaz = L.marker([4.7530902, -74.0980368], {
      icon: mapaIcono,
    }).addTo(mymap);
    let oneirosLaboratorio = L.marker([4.741845499466957, -74.08318357452974], {
      icon: mapaIcono,
    }).addTo(mymap);
    let tejedoresDevida = L.marker([4.734404594574592, -74.10588451723903], {
      icon: mapaIcono,
    }).addTo(mymap);
    let danielArismendi = L.marker([4.741984383637213, -74.09662191723899], {
      icon: mapaIcono,
    }).addTo(mymap);

    let fundacionActitudColombia = L.marker(
      [4.748404452802043, -74.08367464792542],
      {
        icon: mapaIcono,
      }
    ).addTo(mymap);

    let bibliotecaComunitariaElfuerteViejoTopo = L.marker(
      [4.733328033767939, -74.09535177452982],
      {
        icon: mapaIcono,
      }
    ).addTo(mymap);

    let configurArte = L.marker([4.752579927494557, -74.09786253220179], {
      icon: mapaIcono,
    }).addTo(mymap);

    let agrupacionExpresiones = L.marker([4.755806534539646, -74.08852775918581], {
      icon: mapaIcono,
    }).addTo(mymap);

    let mesaArtistasSuba = L.marker([4.740776023478104, -74.08358453220181], {
      icon: mapaIcono,
    }).addTo(mymap);


    let danielPoveda = L.marker([4.720873409605346, -74.04758733077912], {
      icon: mapaIcono,
    }).addTo(mymap);
    //let TropasInsurrectas = L.marker([4.741723, -74.0838001], { icon: mapaIcono }).addTo(mymap);
 let colectivoSubaNativa = L.marker([4.73334941825912, -74.09538396103781], {
      icon: mapaIcono,
    }).addTo(mymap);

 let djpeacemakah = L.marker([4.724897769729154, -74.06729102244556], {
      icon: mapaIcono,
    }).addTo(mymap); 

 let colectivoInSitu = L.marker([4.757481667643806, -74.08851962683636], {
      icon: mapaIcono,
    }).addTo(mymap);

 let basuraVisual = L.marker([4.755870685922254, -74.0886135898738], {
      icon: mapaIcono,
    }).addTo(mymap);

 let fundacionArmoniaDiversa = L.marker([4.7372741481079945, -74.09644674569388], {
      icon: mapaIcono,
    }).addTo(mymap);

  let alSonDePacho = L.marker([4.742195045781222, -74.08523207224778], {
      icon: mapaIcono,
    }).addTo(mymap);
   let eddyGriot = L.marker([4.730149824463705, -74.10225446210586], {
      icon: mapaIcono,
    }).addTo(mymap);
     let laCatarina = L.marker([4.7423061150666355, -74.08548458987384], {
      icon: mapaIcono,
    }).addTo(mymap);
    let danceStudioMR = L.marker([4.724005144403717, -74.09010246103793], {
      icon: mapaIcono,
    }).addTo(mymap);
    let karinaSanchez = L.marker([4.738544332070675, -74.09329586103787], {
      icon: mapaIcono,
    }).addTo(mymap);
    let grupoLasFelicesDanzasDeMiPais = L.marker([4.742487026010675, -74.08317204569383], {
      icon: mapaIcono,
    }).addTo(mymap);
    let SAWWAGColombia = L.marker([4.733306649267827, -74.09539469025391], {
      icon: mapaIcono,
    }).addTo(mymap);

     let fundacionAlmaJoven = L.marker([4.745532405967719, -74.10200913258227], {
      icon: mapaIcono,
    }).addTo(mymap);

      let colectivoTanz = L.marker([4.7425565307556505, -74.09343893258227], {
      icon: mapaIcono,
    }).addTo(mymap);

       let COROTOESTUDIO = L.marker([4.733200826052319, -74.10053640374647], {
      icon: mapaIcono,
    }).addTo(mymap);

      let praxisPhonemes = L.marker([4.74868154988831, -74.113069083446], {
      icon: mapaIcono,
    }).addTo(mymap);
    

    function desplegarSanMiguelStudio() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire({
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
        background: '#FFF4DE',
      });
    }

    function desplegarEscuelaPopularManoAbierta() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire({
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
        background: '#FFF4DE',
      });
    }

    function desplegarReinaldoCastro() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire({
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
        background: '#FFF4DE',
      });
    }

    function desplegarAndresJulianAlvarezBernal() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire({
        title: 'Ruido Sonoro',
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
        background: '#FFF4DE',
      });
    }

    function desplegarColectivoQuizaz() {
      // alert('Funciona el click')
      // console.log(infoMapa);
      Swal.fire({
        title: 'Colectivo Quizaz',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/PortadaAgentesCulturales/5LAC.PNG"
              class="card-img-top" alt="ColectivoQuizaz">
          </a>

          <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <p> Somos un colectivo de artistas integrales con amplia trayectoria en proyectos, obras, laboratorios y talleres con enfoque social, cultural, pedagógico y artístico. 
              A partir del Arte y del Juego, creamos experiencias artísticas, significativas y experimentales desde la interdisciplinariedad de los lenguajes artísticos. Nuestros espacios 
              potencian el desarrollo del ser humano, así como su imaginación, su creatividad, su conocimiento y su pensamiento. Son, además, espacios para el tejido colectivo, para el 
              encuentro con el otro y consigo mismo. Están dirigidos a niños, niñas, jóvenes y adultos de cualquier edad, desde la gestación y primera infancia, hasta el adulto mayor, a 
              todo tipo de persona y/o comunidad que tengan o no tengan afición por lo artístico. </p>
            </div>
              <div>
              <h5>Número de contacto</h5>
              <p>Cel: 3138663383 / 3044705630</p>
              <h5>Correo Electrónico</h5>
              <p>siembrandoarboles@gmail.com</p>
              <h5>Dirección</h5>
              <p>Calle 151 #109 A - 54</p>
            </div>
            
          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarOneirosLaboratorio() {
      Swal.fire({
        title: 'Oneiros Laboratorio',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/OneirosLaboratorio/IMAGOTIPOONEIROS-OneirosLaboratorio.jpg"
              class="card-img-top" alt="OneirosLaboratorios">
          </a>

           <div class="card-body d-flex justify-content-between flex-column">
            <div>
              
              <p>Oneiros Laboratorio es un grupo artístico interdisciplinar de la localidad de Suba, que se interesa en la creación y experimentación de diversos lenguajes artísticos, enfocados en la creación de contenidos para primera infancia, infancia y otros públicos. </p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://www.instagram.com/oneiroslaboratorio/">
                  <i class="fab fa-instagram"></i> 
                </a>
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 3103097339 <br> Cel: 3223262787</p>
              <h5>Correo Electrónico:</h5>
              <p>viajeaoneiros@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>cra 121 # 128 b 21 int 117 apto 602</p>
              <h5>Dirección artística</h5>
              <p>Cra. 90 #147-44  Casa de la Cultura de Suba</p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarTejedoresDeVida() {
      Swal.fire({
        title: 'Tejedores de vida',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/tejedoresDeVida/tejedoresMabelMora.png"
              class="card-img-top" alt="OneirosLaboratorios">
          </a>

           <div class="card-body d-flex justify-content-between flex-column">
            <div>
              
              <p>Agrupación Tejedores de vida reúne varios lenguajes artísticos para la resignificación del territorio y la construcciòn colectiva  </p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://www.facebook.com/AgrupacionTejedoresDeVida" target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 3194902803 </p>
              <h5>Correo Electrónico:</h5>
              <p>devidatejedores@gmail.com </p>
              <h5>Dirección Administrativa:</h5>
              <p>carrera 121c #129d - 24</p>
              <!-- <h5>Dirección artística</h5>
              <p>Cra. 90 #147-44  Casa de la Cultura de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarDanielArismendi() {
      Swal.fire({
        title: 'Daniel Arismendi',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/danielArismendi/danielArismendi.jpeg"
              class="card-img-top" alt="danielArismendi">
          </a>

            <div class="card-body d-flex justify-content-between flex-column">
            <div>
              
              <p>Fotos</p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://www.instagram.com/daab36/"  target="_blank">
                  <!-- <i class="fab fa-facebook"></i>  -->
                  <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 3115589794 </p>
              <h5>Correo Electrónico:</h5>
              <p>dab36@gmail.com </p>
              <h5>Dirección Administrativa:</h5>
              <p>Cra 103CBis # 139 - 43</p>
              <h5>Dirección artística</h5>
              <p>Virtualidad </p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarFundacionActitudColombia() {
      Swal.fire({
        title: 'Fundación Actitud Colombia',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/fundacionActitudColombia/FundacionActitudColombia.jpg"
              class="card-img-top" alt="fundacionActitudColombia">
          </a>

             <div class="card-body d-flex justify-content-between flex-column">
            <div>
              
              <p>Varios</p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://www.facebook.com/ActitudColombia"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                  <!-- <i class="fab fa-instagram"></i> -->
                </a>
            </div>
            <div>
              <!-- <h5>Número de contacto:</h5>
              <p>Cel: 3115589794 </p> -->
              <h5>Correo Electrónico:</h5>
              <p>actitudfundacion@gmail.com </p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 150 No. 92-20</p>
              <!-- <h5>Dirección artística</h5>
              <p>Virtualidad </p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarBlibliotecaComunitariaElFuerteViejoTopo() {
      Swal.fire({
        title: 'Bliblioteca Comunitaria El Fuerte Viejo Topo',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/15IDAC.PNG"
              class="card-img-top" alt="BlibliotecaComunitariaElFuerteViejoTopo">
          </a>

             <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Somos una biblioteca comunitaria ubicada en Aures I, desde donde promovemos la lectura y escritura, buscando potenciar los ejercicios creativos; de la misma forma impulsamos a través de procesos educativos, artísticos y culturales la construcción de comunidad, la participación y la defensa del territorio.</p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://www.facebook.com/elfuertedelviejotopo"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/bibliotecaelviejotopo/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 314 3273 266 </p>
              <p>Cel: 317 3122 814</p>
              <h5>Correo Electrónico:</h5>
              <p>bibliotecaviejotopo@gmail.com </p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 131a #100 24</p>
              <!-- <h5>Dirección artística</h5>
              <p>Virtualidad </p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarConfigurArte() {
      Swal.fire({
        title: 'ConfigurArte',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/16IDAC.PNG"
              class="card-img-top" alt="configurarte">
          </a>

             <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>"ConfigurArte es una agrupación en donde se fusionan varios lenguajes artísticos, para generar procesos artísticos y culturales con diferentes grupos etarios (primera infancia, infancia, adulto mayor). 

"</p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://web.facebook.com/ConfigurArte"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/bibliotecaelviejotopo/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <!-- <h5>Número de contacto:</h5>
              <p>Cel: 314 3273 266 </p>
              <p>Cel: 317 3122 814</p> -->
              <h5>Correo Electrónico:</h5>
              <p>configurarte1227@gmail.com  </p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 151 #109 A - 52</p>
              <!-- <h5>Dirección artística</h5>
              <p>Virtualidad </p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarAgrupacionExpresiones() {
      Swal.fire({
        title: 'ConfigurArte',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/17IDAC.PNG"
              class="card-img-top" alt="agrupacionExpresiones">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>La agrupación EXPRESIONES, es un grupo de artistas y gestores culturales de diferentes áreas cuyo objetivo es contribuir a través de estrategias didácticas, iniciativas e intervenciones sociales que enriquezcan y favorezcan el contexto de la comunidad en general, a través de metodologías y acciones que promuevan una sana convivencia, la apropiación de las artes y resolución de conflictos. </p>
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://web.facebook.com/AgrupacionExpresiones"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/bibliotecaelviejotopo/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <!-- <h5>Número de contacto:</h5>
              <p>Cel: 314 3273 266 </p>
              <p>Cel: 317 3122 814</p> -->
              <h5>Correo Electrónico:</h5>
              <p>agrupacionexpresiones@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Carrera 102 #155-50</p>
              <!-- <h5>Dirección artística</h5>
              <p>Virtualidad </p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarMesaArtistasSuba() {
      Swal.fire({
        title: 'ConfigurArte',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/18IDAC.PNG"
              class="card-img-top" alt="mesaArtistasSuba">
          </a>

                <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <!-- <p>La agrupación EXPRESIONES, es un grupo de artistas y gestores culturales de diferentes áreas cuyo objetivo es contribuir a través de estrategias didácticas, iniciativas e intervenciones sociales que enriquezcan y favorezcan el contexto de la comunidad en general, a través de metodologías y acciones que promuevan una sana convivencia, la apropiación de las artes y resolución de conflictos. </p> -->
            </div>
            <div>
              <h5>Link de Contacto:</h5>
              
                <a href="https://m.facebook.com/profile.php?id=110956637444984&ref=content_filter"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/bibliotecaelviejotopo/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Tel: 4732474 </p>
              <p>Cel: 321 435 0626</p>
              <h5>Correo Electrónico:</h5>
              <p>caro.p.cuellar@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Cra 90 a la 91 entre calle 146 C bis y 147</p>
              <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

      function desplegarDanielPoveda() {
      Swal.fire({
        title: 'Daniel Poveda',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/19IDAC.PNG"
              class="card-img-top" alt="danielPoveda">
          </a>

                <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Artista plástico con maestro en Arte en espacio público y procesos comunitarios.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
                <!--<a href="https://m.facebook.com/profile.php?id=110956637444984&ref=content_filter"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a> -->

                <a href="https://www.instagram.com/dan_poveda/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div>
              <!-- <h5>Número de contacto:</h5>
              <p>Tel: 4732474 </p>
              <p>Cel: 321 435 0626</p> -->
              <h5>Correo Electrónico:</h5>
              <p>danielpovedav@gamail.com </p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 136 #94-09</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarColectivoSubaNativa() {
      Swal.fire({
        title: 'Colectivo Suba Nativa',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/20IDAC.PNG"
              class="card-img-top" alt="ColectivoSubaNativa">
          </a>

                 <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>El colectivo Suba Nativa es una organización comunitaria sin animo de lucro que ha tenido presencia en la localidad hace más de 10 años, integrada por mujeres y hombres que desde la educación popular promovemos procesos de participación ciudadana, educación ambiental, memoria, paz, apropiación y defensa del territorio.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
                <a href="https://www.facebook.com/colectivosuba.nativa.9"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>
<!-- 
                <a href="https://www.instagram.com/dan_poveda/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 350 817 9198 </p>
              <p>Cel: 320 476 5407</p>
              <h5>Correo Electrónico:</h5>
              <p>colectivosubanativa@gmail.com </p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 131a #100 24 </p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }
    function desplegarDjPeaceMakah () {
      Swal.fire({
        title: 'Dj peace makah ',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/21IDAC.PNG"
              class="card-img-top" alt="Djpeacemakah">
          </a>

                  <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Promotor y creador musical </p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
                <!-- <a href="https://www.facebook.com/colectivosuba.nativa.9"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a> -->

                <a href="https://www.instagram.com/projectpeacemaker"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 317 384 1237 </p>
              <h5>Correo Electrónico:</h5>
              <p>Dharmahammer@icloud.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Cll 133#58-58</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarColectivoInSitu () {
      Swal.fire({
        title: 'Colectivo In Situ',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/22IDAC.PNG"
              class="card-img-top" alt="ColectivoInSitu">
          </a>

                   <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Colectivo desde la localidad de Suba que trabaja en diferentes lenguajes artísticos con y para la comunidad. </p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
                <a href="https://www.facebook.com/ColectivoINSITU"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/projectpeacemaker"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 312 587 7909</p>
              <h5>Correo Electrónico:</h5>
              <p>colectivoinsitu@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Carrera 102 #155-50 </p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarBasuraVisual () {
      Swal.fire({
        title: 'Basura Visual',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/23IDAC.jpg"
              class="card-img-top" alt="ColectivoInSitu">
          </a>

            <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Aqui solo va a perder su tiempo.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
                <a href="https://facebook.com/ProyectoBasuraVisual/"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/projectpeacemaker"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 312 587 7909</p>
              <h5>Correo Electrónico:</h5>
              <p>proyectobasuravisual@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Carrera 102 # 155-50  </p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarFundacionArmoniaDiversa () {
      Swal.fire({
        title: 'Fundación Armonía Diversa',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/24IDAC.jpg"
              class="card-img-top" alt="Fundación Armonía Diversa">
          </a>

            <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Somos una fundacion sin animo de lucro que trabaja con personas con discapacidad de la localidad de suba,  fortaleciendo habilidades y destrezas artisticas como música y danzas</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
                <a href="https://facebook.com/fuardi18"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/projectpeacemaker"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 320 829 8137</p>
              <h5>Correo Electrónico:</h5>
              <p>fuardi18@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>cra 102 #133_59   </p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

     function desplegarAlSonDePacho () {
      Swal.fire({
        title: 'Al son de pacho',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/25IDAC.PNG"
              class="card-img-top" alt="Al son de pacho ">
          </a>

             <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Música de toda clase con instrumentos andinos, cuenta con 22 años de trabajo en la localidad de SUBA.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a>
                <!-- <a href="https://facebook.com/fuardi18"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a> -->

                <!-- <a href="https://www.instagram.com/projectpeacemaker"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 312 336 2609</p>
              <h5>Correo Electrónico:</h5>
              <p>frangopa2223@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Carrera 93 #147-10</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

     function desplegarEddyGriot () {
      Swal.fire({
        title: 'Eddy Griot',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/26IDAC.PNG"
              class="card-img-top" alt="Eddy Griot">
          </a>

             <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Licenciado en Educación Especial. Magister en Innovaciones Sociales en educación. Musico tradicional</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://web.facebook.com/john.e.solis.7"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/projectpeacemaker"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Tel: 7182585</p>
              <p>Cel: 310 805 6458</p>
              <h5>Correo Electrónico:</h5>
              <p>edy_gruezo@hotmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>calle 127 # 104a-01</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarLaCatarina () {
      Swal.fire({
        title: 'La Catarina',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/27IDAC.PNG"
              class="card-img-top" alt="La Catarina">
          </a>

             <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>La Catarina es una propuesta artística que gira alrededor del té artesanal, para crear una experiencia sensorial que abarca diversos lenguajes. Nos interesa la investigación en las plantas y la cocina, y compartimos nuestros saberes a partir de los libros, títeres, talleres y, por supuesto, las mezclas de té.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <!-- <a href="https://web.facebook.com/john.e.solis.7"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a> -->

                <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 300 866 2563</p>
              <p>Cel: 300 866 2563</p>
              <h5>Correo Electrónico:</h5>
              <p>catsaavedrag@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>CALLE 147 NO.93-09 APTO 407</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }
    function desplegarDanceStudioMR () {
      Swal.fire({
        title: 'Dance Studio MR',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/28IDAC.PNG"
              class="card-img-top" alt="Dance Studio MR">
          </a>

              <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Es una organización que ofrece servicios Artísticos, Culturales y Deportivos.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://www.facebook.com/dancestudiocolombia"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 319 296 6141</p>
              <h5>Correo Electrónico:</h5>
              <p>dancestudiolts@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 129 #91a - 19</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarKarinaSanchez () {
      Swal.fire({
        title: 'Karina Sánchez',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/29IDAC.PNG"
              class="card-img-top" alt="Karina Sánchez">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Yoga Terapéutico</p>
            </div>
            <div>
               <!-- <h5>Link de Contacto:</h5> -->
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <!-- <a href="https://www.facebook.com/dancestudiocolombia"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a> -->

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 314 388 2464</p>
              <h5>Correo Electrónico:</h5>
              <p>psicokarina1@hotmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Calle 137 # 99 a 18</p>
              <!-- <h5>Dirección artística</h5>
              <p>Plaza fundacional de Suba</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarGrupoLasFelicesDanzasDeMiPais () {
      Swal.fire({
        title: 'Grupo Las felices danzas de mi país',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/30IDAC.PNG"
              class="card-img-top" alt="Grupo Las felices danzas de mi país">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Somos un grupo de danza folclórica, entrenamos en la Casa de la Cultura de Suba desde marzo del año 2016.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://www.facebook.com/Las-Felices-Danzas-de-mi-Pa%C3%ADs-108114321097839/"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 310 202 4342</p>
              <h5>Correo Electrónico:</h5>
              <p>lasfelicesdanzasdemipais@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p>Cll 132 c bis # 107 b 38</p>
              <h5>Dirección artística</h5>
              <p>Cr 90 # 147 44</p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    function desplegarSAWWAGColombia  () {
      Swal.fire({
        title: 'SAW-WAG Colombia',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/31IDAC.PNG"
              class="card-img-top" alt="SAW-WAG Colombia">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Eventos de Lucha Libre SAW-WAG</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://www.facebook.com/SawColombiaLuchaLibre/"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 310 607 9155</p>
              <h5>Correo Electrónico:</h5>
              <p>wilsonduster@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p> Calle 131 a # 100 – 24 / Salón Comunal Barrio Aures 1.</p>
              <!-- <h5>Dirección artística</h5>
              <p>Cr 90 # 147 44</p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }
    function desplegarFundacionAlmaJoven  () {
      Swal.fire({
        title: 'Fundación Alma Joven',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/32IDAC.PNG"
              class="card-img-top" alt="SAW-WAG Colombia">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Encargada de la biblioteca comuneros norte</p>
            </div>
            <div>
             <!--  <h5>Link de Contacto:</h5> -->
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <!-- <a href="https://www.facebook.com/SawColombiaLuchaLibre/"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a> -->

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 310 584 0244</p>
              <p>Tel: 4743081</p>
              <h5>Correo Electrónico:</h5>
              <p>fundalmajoven@hotmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p> calle 141 #112-51</p>
              <h5>Dirección artística</h5>
              <p>calle 140b 111a 35</p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }
    function desplegarColectivoTanz  () {
      Swal.fire({
        title: 'Colectivo Tanz',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/33IDAC.PNG"
              class="card-img-top" alt="Colectivo Tanz">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Colectivo Tanz es una agrupación donde tenemos un proyecto de formación, sensibilización y creación para personas con talento, vocación y deseos de aprender el arte del ballet clásico para niños, jóvenes y adultos principiantes.</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://www.facebook.com/colectivotanz"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 321 441 9440</p>
              <!-- <p>Tel: 4743081</p> -->
              <h5>Correo Electrónico:</h5>
              <p>tanzestudiodedanza@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p> Carrera 101b #140b-47</p>
              <h5>Dirección artística</h5>
              <p>Centro Comercial Plaza Imperial salón de conferncias y Conjunto Nueva Suba Etapa 3 salón social </p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }
    function desplegarCOROTOESTUDIO  () {
      Swal.fire({
        title: 'COROTOESTUDIO',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/34IDAC.PNG"
              class="card-img-top" alt="Colectivo Tanz">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Organizacion de produccion audiovisual</p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://www.facebook.com/corotoestudiocolombia/"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 301 380 7280</p>
              <p>Tel: 4835760</p>
              <h5>Correo Electrónico:</h5>
              <p>Corotorap@gmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p> Cll 130 c bis n 104 12</p>
              <!-- <h5>Dirección artística</h5>
              <p>Centro Comercial Plaza Imperial salón de conferncias y Conjunto Nueva Suba Etapa 3 salón social </p> -->

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }
    function desplegarPraxisPhonemes  () {
      Swal.fire({
        title: 'Praxis Phonemes',
        html: `<div class="card">
          <a href="#">
            <img
              src="../../assets/images/agentesCulturales/DetalleAgentesCulturales/35IDAC.PNG"
              class="card-img-top" alt="Praxis Phonemes">
          </a>

               <div class="card-body d-flex justify-content-between flex-column">
            <div>
              <!-- Descripción del agente cultural -->
              <p>Agrupación de Música Rap </p>
            </div>
            <div>
               <h5>Link de Contacto:</h5>
              
               <!-- <a href="https://www.trioalsondepacho.com/" target="_blank">
                ¡Mi sitio Web! (click aquí)
              </a> -->
                <a href="https://www.facebook.com/PRAXISPHONEMESCOLOMBIA"  target="_blank">
                  <i class="fab fa-facebook"></i> 
                </a>

                <!-- <a href="https://www.instagram.com/telacatarina/"  target="_blank">
                  <i class="fab fa-instagram"></i>
                </a> -->
            </div>
            <div>
              <h5>Número de contacto:</h5>
              <p>Cel: 313 230 4997</p>
              <!-- <p>Tel: 4835760</p> -->
              <h5>Correo Electrónico:</h5>
              <p>praxisphonemescolombia@hotmail.com</p>
              <h5>Dirección Administrativa:</h5>
              <p> Carrera 136a # 142b-18</p>
              <h5>Dirección artística</h5>
              <p>Localidad de Suba </p>

            </div>

          </div>
        </div>`,
        confirmButtonText: 'Cerrar',
        background: '#FFF4DE',
      });
    }

    sanMiguelStudio.on('click', desplegarSanMiguelStudio);
    escuelaPopularManoAbierta.on('click', desplegarEscuelaPopularManoAbierta);
    reinaldoCastro.on('click', desplegarReinaldoCastro);
    andresJulianAlvarezBernal.on('click', desplegarAndresJulianAlvarezBernal);
    ColectivoQuizaz.on('click', desplegarColectivoQuizaz);
    oneirosLaboratorio.on('click', desplegarOneirosLaboratorio);
    tejedoresDevida.on('click', desplegarTejedoresDeVida);
    danielArismendi.on('click', desplegarDanielArismendi);
    fundacionActitudColombia.on('click', desplegarFundacionActitudColombia);
    bibliotecaComunitariaElfuerteViejoTopo.on(
      'click',
      desplegarBlibliotecaComunitariaElFuerteViejoTopo
    );
    configurArte.on('click', desplegarConfigurArte);
    agrupacionExpresiones.on('click', desplegarAgrupacionExpresiones);
    mesaArtistasSuba.on('click', desplegarMesaArtistasSuba);
    danielPoveda.on('click', desplegarDanielPoveda);
    colectivoSubaNativa.on('click', desplegarColectivoSubaNativa);
    djpeacemakah.on('click', desplegarDjPeaceMakah);
    colectivoInSitu.on('click', desplegarColectivoInSitu);
    basuraVisual.on('click', desplegarBasuraVisual);
    fundacionArmoniaDiversa.on('click', desplegarFundacionArmoniaDiversa);
    alSonDePacho.on('click', desplegarAlSonDePacho);
    eddyGriot.on('click', desplegarEddyGriot);
    laCatarina.on('click', desplegarLaCatarina);
    danceStudioMR.on('click', desplegarDanceStudioMR);
    karinaSanchez.on('click', desplegarKarinaSanchez);
    grupoLasFelicesDanzasDeMiPais.on('click', desplegarGrupoLasFelicesDanzasDeMiPais);
    SAWWAGColombia.on('click', desplegarSAWWAGColombia);
    fundacionAlmaJoven.on('click', desplegarFundacionAlmaJoven);
    colectivoTanz.on('click', desplegarColectivoTanz);
    COROTOESTUDIO.on('click', desplegarCOROTOESTUDIO);
    praxisPhonemes.on('click', desplegarPraxisPhonemes);
  }
}
