import React from 'react';
import './App.css';
import './components/Barra';
import Barra from './components/Barra';
//import Tarjeta from './components/Tarjeta';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Proyectos from './components/Proyectos';
import LoadFace from './components/LoadFace';
import Contacto from './components/Contacto';
import Intro from './components/Intro';
import Curriculum from './components/Curriculum';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInDiv = styled.div`
  animation: 4s ${zoomInAnimation};
`;

function App() {
  return (
    <div className="App">
      <Barra/>
      {/* <Element name="parte1" className="element"> */}
      <br id="info"></br>
      <section className="App-header">
        <ZoomInDiv>
          <h4>
            INFORMACIÓN
          </h4>
        </ZoomInDiv>
      </section>
      {/* </Element> */}
      <div className = "App-intro">
        <div className = "App-loadface">
          <LoadFace/>
        </div>
        <Intro/>
      </div>
      <br id="valores"></br>
      <section className="App-header">
        <ZoomInDiv>
          <h4>
            VALORES
          </h4>
        </ZoomInDiv>
      </section>
      <div className = "App-valores">
        <div className="App-valoresM">
          <img className= "imagenM" src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"  alt="Desarrollo de Software"/>
          <Mision/>
        </div>
        <div className="App-valoresV">
          <Vision/>  
          <img className= "imagenV" src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="Desarrollo de Software"/>
        </div>
      </div>
      <br id="proyectos"></br>
      <section className="App-header">
        <ZoomInDiv>
          <h4>
            PROYECTOS
          </h4>
        </ZoomInDiv>
      </section>
        <div className = "App-proyectos">
          <Proyectos titulo="Cotizac" 
          descripcion="Sistema de control de inventarios por medio de documentos base: cotización y orden de compra. Utilizando JavaFX y su base de datos en SQL Server." 
          imagen="https://drive.google.com/uc?export=view&id=1yjPPRddlzKoQJ0oHMiF78kjL92yDqgV3"
          ruta=""/>
          <Proyectos titulo="XML->XLS" 
          descripcion="Aplicación en Java utilizando Apache POI para facilitar el control de archivos xml provenientes de CFDI, generando un archivo de Excel con la información que el usuario desee extraer." 
          imagen="https://drive.google.com/uc?export=view&id=1anZ3FAo1JbE5w1zR_eoetLUgFMUftOYR"
          ruta=""/>
          <Proyectos titulo="Hackify Challenge" 
          descripcion="Hackatón de inteligencia artificial donde se trabajó en equipo utilizando diferentes herramientas como Tensorflow, Javascript y Python para su desarrollo." 
          imagen="https://media-exp1.licdn.com/dms/image/C4E0BAQEqWoIkOlz9og/company-logo_200_200/0/1521330477927?e=2159024400&v=beta&t=kmPCXfv_TnR71nimfmTV6sx8rif28OlXHrIO_N37Cpg"
          ruta="https://drive.google.com/file/d/1lHGnOV2XRKQGefapXnIcJb8eksBx5V8P/view"/>
        </div>
        <div className = "App-proyectos">
          <Proyectos titulo="Bases de Datos" 
          descripcion="Implementación, mantenimiento y gestión de bases de datos. Otorgando soluciones  por medio de creación, manipulación y extracción de información en SQL." 
          imagen="https://sciencewarsdotcom.files.wordpress.com/2017/08/basedatos.png?w=550"
          ruta=""/>
          <Proyectos titulo="Reportería" 
          descripcion="Desarrollo de reportería con información de base de datos según necesidad del cliente, utilizando herramientas como Jasper Reports o Crystal Reports." 
          imagen="https://community.jaspersoft.com/files/icon/JasperReports%20Server.png"
          ruta=""/>
          <Proyectos titulo="Parkplus" 
          descripcion="Aplicación para estacionamiento que permite controlar disponibilidad, cobrar y generar ticket de entrada y recibo de cobro. Desarrollado en Java, SQL Server y iTextPDF." 
          imagen="https://drive.google.com/uc?export=view&id=1YYyENx4dB0g9_HX7UHPJvLdYEb8wi_ei"
          ruta=""/>
        </div>
        <br id="cv"></br>
      <section className="App-header" id="cv">
        <ZoomInDiv>
          <h4>
            CURRÍCULUM
          </h4>
        </ZoomInDiv>
      </section>
        <div className = "App-cv">
          <Curriculum/>
        </div>
        <br id="contacto"></br>
        <section className="App-header">
        <ZoomInDiv>
          <h4>
            CONTACTO
          </h4>
        </ZoomInDiv>
      </section>
        <div className = "App-contacto">
          <Contacto/>
        </div>
    </div>
  );
}

export default App;
