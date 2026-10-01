import React from 'react';
import estilos from './Boton.module.css';

export default function Boton({ variante = 'primario', activo = false, children, onClick, className = '' }) {
  const estiloVariante = variante === 'secundario' ? estilos.secundario : estilos.primario;
  
  return (
    <button 
      className={`${estilos.botonBase} ${estiloVariante} ${activo ? estilos.activo : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}