import React from 'react';
import './Tarjeta.css';

function Tarjeta() {
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web Full Stack";
  const mensaje = "Apasionada por crear experiencias web interactivas con React, JavaScript moderno y diseño UI centrado en el usuario.";
  const avatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&auto=format&fit=crop&q=80";

  return (
    <div className="tarjeta-card">
      <span className="badge-status">● Disponible para proyectos</span>
      <div className="tarjeta-avatar-container">
        <img className="tarjeta-avatar" src={avatar} alt={`Foto de ${nombre}`} />
      </div>
      <h2 className="tarjeta-nombre">{nombre}</h2>
      <h4 className="tarjeta-profesion">{profesion}</h4>
      <p className="tarjeta-mensaje">{mensaje}</p>
    </div>
  );
}

export default Tarjeta;