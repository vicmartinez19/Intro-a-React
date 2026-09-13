import React from 'react';
import './Tarjeta.css';

// Componente Tarjeta refactorizado para recibir datos dinamicos via Props
function Tarjeta({ nombre, profesion, avatar, mensaje, habilidades, disponible }) {
  return (
    <div className="tarjeta-card">
      <span className="badge-status" style={{
        backgroundColor: disponible ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
        color: disponible ? '#4ade80' : '#f87171',
        borderColor: disponible ? '#22c55e' : '#ef4444'
      }}>
        {disponible ? '● Disponible para proyectos' : '○ En proyecto actualmente'}
      </span>

      <div className="tarjeta-avatar-container">
        <img className="tarjeta-avatar" src={avatar} alt={`Avatar de ${nombre}`} />
      </div>

      <h2 className="tarjeta-nombre">{nombre}</h2>
      <h4 className="tarjeta-profesion">{profesion}</h4>
      <p className="tarjeta-mensaje">{mensaje}</p>

      {/* Lista de habilidades pasada por Props */}
      {habilidades && habilidades.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginBottom: '1.2rem' }}>
          {habilidades.map((hab, index) => (
            <span key={index} style={{
              background: '#334155',
              color: '#93c5fd',
              fontSize: '0.75rem',
              padding: '3px 10px',
              borderRadius: '6px'
            }}>
              {hab}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tarjeta;