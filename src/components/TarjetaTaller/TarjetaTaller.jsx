import { useState } from 'react';
import styles from "./TarjetaTaller.module.css";
import Boton from '../Boton/Boton'

export default function TarjetaTaller({ taller, esLista }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
  
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  let claseCupos = styles.disponible;
  if (libres === 0) {
    claseCupos = styles.completo;
  } else if (libres <= 3) {
    claseCupos = styles.pocos;
  }

  const alternarDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  return (
    <article className={`${styles.tarjeta} ${claseCupos} ${mostrarDetalles ? styles.expandida : ''} ${esLista ? styles.horizontal : ''}`}>
      
      {nuevo && <span className={styles.etiquetaNuevo}>Nuevo</span>}

      <div>
        <h2>{titulo}</h2>
        <p>{categoria}</p>
        
        {libres === 0 ? (
          <p className="fw-bold text-danger">¡Completo!</p>
        ) : (
          <p>Cupos libres: {libres} de {cupo}</p>
        )}
        <div className={styles.contenedorBarra}>
          <div 
            className={styles.progresoBarra} 
            style={{ width: `${porcentaje}%` }}
          ></div>
        </div>
        <small>Inscriptos: {porcentaje}%</small>
      </div>

      <div className="mt-3">
        <Boton variante="secundario" activo={mostrarDetalles} onClick={alternarDetalles} className="w-100 btn-sm">
          {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
        </Boton>
        
        {mostrarDetalles && (
          <p className={styles.descripcion}>{descripcion}</p>
        )}
      </div>
    </article>
  );
}