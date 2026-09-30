import { useState ,useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import {talleres} from "./data/talleres.js"
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller.jsx"


function App() {
  const [count, setCount] = useState(0)

  const [tema,setTema]= useState('claro')

  useEffect(()=>{
    document.body.setAttribute('data-tema',tema);
  },[tema]);

  const alternarTema=()=>{
    setTema(tema=='claro'?'oscuro':'claro');
  }

  return (
    <main className='container py-5'>
      <h1>Catálogo de Talleres</h1>
      <button className="btn btn-primary" onClick={alternarTema}>
        cambiar a modo {tema=='claro'?'oscuro':'claro'}
      </button>
      <div className='row g-4'>
        {talleres.map((taller)=>(
          <div key={taller.id} className="col-12 col-md-6 col-lg-4 data-tema={tema}">
            <TarjetaTaller taller={taller}/>
            </div>
        ))}
      </div>
    </main>
  )
}

export default App
