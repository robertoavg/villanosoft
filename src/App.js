import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import "./components/Barra";
import Barra from "./components/Barra";
import SwitchIdioma from "./components/SwitchIdioma";
import Mision from "./components/Mision";
import Vision from "./components/Vision";
import Proyectos from "./components/Proyectos";
import LoadFace from "./components/LoadFace";
import Contacto from "./components/Contacto";
import Intro from "./components/Intro";
import Curriculum from "./components/Curriculum";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import rutaEsp from "../src/img/cv_esp.pdf";
import rutaIng from "../src/img/cv_eng.pdf";
import Banner from "./components/Banner";
import C from "./img/C.png";
import Cfdireader from "./img/cfdireader.png";
import Hack from "./img/Hackify.png";
import BD from "./img/basedatos.png";
import Report from "./img/report.png";
import Parkplus from "./img/parkplus.png";

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInDiv = styled.div`
  animation: 4s ${zoomInAnimation};
`;

function App() {
  const [idioma, setIdioma] = React.useState("Español");
  const [listo, setListo] = React.useState(true);

  function handleIdioma(idioma) {
    setIdioma(idioma);
    setListo(true);
  }

  function cambiarIdioma() {
    setListo(false);
  }

  function muestraApp() {
    if (idioma === "Español") {
      return (
        <div className="App">
          <div className="App-barra">
            <Barra cambiarIdioma={() => cambiarIdioma()} i={idioma} />
          </div>
          <br id="info"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>INFORMACIÓN</h3>
            </ZoomInDiv>
          </section>
          <div className="App-intro">
            <div className="App-loadface">
              <LoadFace />
            </div>
            <Intro i={idioma} />
          </div>
          <br id="valores"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>VALORES</h3>
            </ZoomInDiv>
          </section>
          <div className="App-valores">
            <div className="App-valoresM">
              <img
                className="imagenM"
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Desarrollo de Software"
              />
              <Mision i={idioma} />
            </div>
            <div className="App-valoresV">
              <Vision i={idioma} />
              <img
                className="imagenV"
                src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Desarrollo de Software"
              />
            </div>
          </div>
          <br id="proyectos"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>PROYECTOS</h3>
            </ZoomInDiv>
          </section>
          <div className="contenedor-proyectos">
            <div className="App-proyectos">
              <Proyectos
                titulo="Cotizac"
                descripcion="Sistema de control de inventarios por medio de documentos base: cotización y orden de compra. Utilizando JavaFX y su base de datos en SQL Server."
                imagen={C}
                ruta="https://drive.google.com/file/d/12S968QROoEGbCshEBgNrfyD585xf6Kyr/view?usp=sharing"
              />
              <Proyectos
                titulo="CFDI_Reader"
                descripcion="Aplicación en Java utilizando Apache POI para facilitar el control de archivos xml provenientes de CFDI, generando un archivo de Excel con la información que el usuario desee extraer."
                imagen={Cfdireader}
                ruta="https://drive.google.com/file/d/1RNyui0bdPP_xutPn840XMpHiDuOyxg1e/view"
              />
              <Proyectos
                titulo="Hackify Challenge"
                descripcion="Hackatón de inteligencia artificial donde se trabajó en equipo utilizando diferentes herramientas como Tensorflow, Javascript y Python para su desarrollo."
                imagen={Hack}
                ruta="https://drive.google.com/file/d/1lHGnOV2XRKQGefapXnIcJb8eksBx5V8P/view"
              />
            </div>
            <div className="App-proyectos">
              <Proyectos
                titulo="Bases de Datos"
                descripcion="Implementación, mantenimiento y gestión de bases de datos. Otorgando soluciones  por medio de creación, manipulación y extracción de información en SQL."
                imagen={BD}
                ruta=""
              />
              <Proyectos
                titulo="Reportería"
                descripcion="Desarrollo de reportería con información de base de datos según necesidad del cliente, utilizando herramientas como Jasper Reports o Crystal Reports."
                imagen={Report}
                ruta=""
              />
              <Proyectos
                titulo="Parkplus"
                descripcion="Aplicación para estacionamiento que permite controlar disponibilidad, cobrar y generar ticket de entrada y recibo de cobro. Desarrollado en Java, SQL Server y iTextPDF."
                imagen={Parkplus}
                ruta="https://drive.google.com/file/d/1OHGUSA5MeDNaGK3svztrj7GJKBiAvAgi/view"
              />
            </div>
          </div>
          <br id="cv"></br>
          <section className="App-header" id="cv">
            <ZoomInDiv>
              <h3>CURRÍCULUM</h3>
            </ZoomInDiv>
          </section>
          <div className="contenedor-cv">
            <div className="App-cv">
              <Curriculum i={idioma} />
            </div>
            <Button
              href={rutaEsp}
              target="_blank"
              variant="contained"
              color="primary"
              disableElevation
            >
              Abrir CV
            </Button>
          </div>
          <br id="contacto"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>CONTACTO</h3>
            </ZoomInDiv>
          </section>
          <div className="App-contacto">
            <Contacto i={idioma} />
          </div>
          <div className="App-banner">
            <Banner i={idioma}/>
          </div>
        </div>
      );
    }
    if (idioma === "English") {
      return (
        <div className="App">
          <div className="App-barra">
          <Barra cambiarIdioma={() => cambiarIdioma()} i={idioma} />
          </div>
          <br id="info"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>INFORMATION</h3>
            </ZoomInDiv>
          </section>
          <div className="App-intro">
            <div className="App-loadface">
              <LoadFace />
            </div>
            <Intro i={idioma} />
          </div>
          <br id="valores"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>VALUES</h3>
            </ZoomInDiv>
          </section>
          <div className="App-valores">
            <div className="App-valoresM">
              <img
                className="imagenM"
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Desarrollo de Software"
              />
              <Mision i={idioma} />
            </div>
            <div className="App-valoresV">
              <Vision i={idioma} />
              <img
                className="imagenV"
                src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Desarrollo de Software"
              />
            </div>
          </div>
          <br id="proyectos"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>PROJECTS</h3>
            </ZoomInDiv>
          </section>
          <div className="contenedor-proyectos">
            <div className="App-proyectos">
              <Proyectos
                titulo="Cotizac"
                descripcion="Software to manage and control your inventory using base documents: Clients quotation and purchase order. Developed with JavaFX and database using SQL Server."
                imagen={C}
                ruta="https://drive.google.com/file/d/1W9P0qi6wq9q-cOVI4WUWoYKJ_E3rF5oT/view"
              />
              <Proyectos
                titulo="CFDI_Reader"
                descripcion="Java App using Apache POI to facilitate the control from the bills. You can generate Excel document with the information the user wants to extract from the XML archives."
                imagen={Cfdireader}
                ruta="https://drive.google.com/file/d/15_HzBlFhXKQ4Id6Wqvh9upj7ZWb8l1VY/view"
              />
              <Proyectos
                titulo="Hackify Challenge"
                descripcion="Artificial Intelligence team hackaton where I used different tools and languages as Tensorflow, Javascript and Python to develop a mole and skin cancer analizer web app."
                imagen={Hack}
                ruta="https://drive.google.com/file/d/1lHGnOV2XRKQGefapXnIcJb8eksBx5V8P/view"
              />
            </div>
            <div className="App-proyectos">
              <Proyectos
                titulo="Databases"
                descripcion="Database administration. I manage to create solutions to different client scenarios that can be solved by creation, manipulation, and extraction of information using SQL."
                imagen={BD}
                ruta=""
              />
              <Proyectos
                titulo="Reports"
                descripcion="Design and creation of reports from database information to satisfy the client needs in the analysis of their figures. Using tools as Jasper Reports or Crystal Reports."
                imagen={Report}
                ruta=""
              />
              <Proyectos
                titulo="Parkplus"
                descripcion="Java App for a local parking lot to facilitate their daily work, from parking space avaliability, charging, ticket and receipt control. Developed using Java, SQL Server and iTextPDF."
                imagen={Parkplus}
                ruta="https://drive.google.com/file/d/1kT9xg8x8cCUR4CByaXmlC3p_yBwSy4Ql/view"
              />
            </div>
          </div>
          <br id="cv"></br>
          <section className="App-header" id="cv">
            <ZoomInDiv>
              <h3>RESUME</h3>
            </ZoomInDiv>
          </section>
          <div className="contenedor-cv">
            <div className="App-cv">
              <Curriculum i={idioma} />
            </div>
            <Button
              href={rutaIng}
              target="_blank"
              variant="contained"
              color="primary"
              disableElevation
            >
              Open Resume
            </Button>
          </div>
          <br id="contacto"></br>
          <section className="App-header">
            <ZoomInDiv>
              <h3>CONTACT</h3>
            </ZoomInDiv>
          </section>
          <div className="App-contacto">
            <Contacto i={idioma} />
          </div>
          <div className="App-banner">
            <Banner i={idioma}/>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {listo ? (
        <div>{muestraApp()}</div>
      ) : (
        <div className="contenedorIdioma">
          <SwitchIdioma
            asignaIdioma={(idioma) => handleIdioma(idioma)}
            className="idioma"
            position="fixed"
          />
        </div>
      )}
    </div>
  );
}

export default App;
