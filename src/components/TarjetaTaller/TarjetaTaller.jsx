import { useState } from 'react';
import styles from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
  
  // Estado local para alternar la vista de detalles
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  // Definir la clase según los cupos libres
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
    <article className={`${styles.tarjeta} ${claseCupos} ${mostrarDetalles ? styles.expandida : ''}`}>
      {/* Etiqueta condicional "Nuevo" */}
      {nuevo && <span className={styles.etiquetaNuevo}>Nuevo</span>}

      <div>
        <h2>{titulo}</h2>
        <p>{categoria}</p>
        
        {libres === 0 ? (
          <p className="fw-bold text-danger">¡Completo!</p>
        ) : (
          <p>Cupos libres: {libres} de {cupo}</p>
        )}
        

        {/* Barra de ocupación con estilo en línea */}
        <div className={styles.contenedorBarra}>
          <div 
            className={styles.progresoBarra} 
            style={{ width: `${porcentaje}%` }}
          ></div>
        </div>
        <small>Inscriptos: {porcentaje}%</small>
      </div>

      <div className="mt-3">
        <button className="btn btn-outline-secondary btn-sm w-100" onClick={alternarDetalles}>
          {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
        </button>

        {/* Descripción condicional */}
        {mostrarDetalles && (
          <p className={styles.descripcion}>{descripcion}</p>
        )}
      </div>
    </article>
  );
}