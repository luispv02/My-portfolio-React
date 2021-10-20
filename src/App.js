import React from 'react'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import Tecnologias from './pages/Tecnologias'
import Contacto from './pages/Contacto'



function App() {
  
  return (
    <div className="contenedor">
      <div className="inicio" id="inicio">
        <Inicio />
      </div>

      <div className="sobre-mi" id="sobre-mi">
        <SobreMi />
      </div>

      <div className="proyectos" id="proyectos">
        <Proyectos />
      </div>

      <div className="tecnologias" id="tecnologias">
        <Tecnologias />
      </div>

      <div className="contacto" id="contacto">
        <Contacto />
      </div>
    </div>
  );
}

export default App;
