import React from 'react';

// Componente Funcional Tarjeta - Version inicial con datos estaticos y sintaxis JSX
function Tarjeta() {
  // Datos estaticos definidos localmente segun las lecturas de JSX
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web Full Stack";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación creada con React y JSX!";

  return (
    <div style={{
      backgroundColor: '#1e293b',
      border: '1px solid #334155',
      borderRadius: '16px',
      padding: '24px',
      maxWidth: '360px',
      margin: '0 auto',
      textAlign: 'center',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
    }}>
      {/* Expresiones dinamicas en JSX mediante llaves {} */}
      <h2 style={{ color: '#38bdf8', marginBottom: '8px' }}>{nombre}</h2>
      <h4 style={{ color: '#94a3b8', fontWeight: '400', marginBottom: '16px' }}>{profesion}</h4>
      <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;