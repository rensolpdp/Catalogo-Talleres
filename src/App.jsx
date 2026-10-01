import { useState ,useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import {talleres} from "./data/talleres.js"
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller.jsx"
import Boton from './components/Boton/Boton.jsx'

function App() {
  const [tema, setTema] = useState('claro');
  const [vistaLista, setVistaLista] = useState(false); 
  const [compacto, setCompacto] = useState(false);     

  useEffect(() => {
    document.body.setAttribute('data-tema', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  return (
    <main className={`container ${compacto ? 'py-2' : 'py-5'}`}>
      <h1>Catálogo de Talleres</h1>
      
      <div className="d-flex flex-wrap gap-2 mb-4">
        <Boton variante="primario" onClick={alternarTema}>
          Cambiar a modo {tema === 'claro' ? 'oscuro' : 'claro'}
        </Boton>

        <Boton variante="secundario" activo={vistaLista} onClick={() => setVistaLista(!vistaLista)}>
          {vistaLista ? 'Vista Grilla' : 'Vista Lista'}
        </Boton>

        <Boton variante="secundario" activo={compacto} onClick={() => setCompacto(!compacto)}>
          {compacto ? 'Modo Normal' : 'Modo Compacto'}
        </Boton>
      </div>

      <div className={`row ${compacto ? 'g-2' : 'g-4'}`}>
        {talleres.map((taller) => (
          <div key={taller.id} className={vistaLista ? "col-12" : "col-12 col-md-6 col-lg-4"}>
            <TarjetaTaller taller={taller} esLista={vistaLista} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App
