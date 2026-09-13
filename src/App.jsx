import React from 'react';
import Tarjeta from './Tarjeta';

function App() {
  const perfiles = [
    {
      id: 1,
      nombre: "Ana Pérez",
      profesion: "Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&auto=format&fit=crop&q=80",
      mensaje: "Especialista en React, interfaces fluidas y accesibilidad web.",
      habilidades: ["React", "JavaScript ES6", "CSS3", "Vite"],
      disponible: true
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      profesion: "Backend Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&auto=format&fit=crop&q=80",
      mensaje: "Apasionado por arquitecturas en Node.js, microservicios y bases de datos.",
      habilidades: ["Node.js", "Express", "PostgreSQL", "Docker"],
      disponible: false
    },
    {
      id: 3,
      nombre: "Lucía Fernández",
      profesion: "Product & UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=250&auto=format&fit=crop&q=80",
      mensaje: "Diseñando experiencias humanas, sistemas de diseño y prototipado ágil.",
      habilidades: ["Figma", "Design Systems", "User Research", "HTML/CSS"],
      disponible: true
    }
  ];

  return (
    <div className="app-container">
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.4rem', color: '#38bdf8', marginBottom: '0.5rem' }}>
          Directorio de Tarjetas Profesionales
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Demostración de Componentes Funcionales reutilizables mediante Props en React
        </p>
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {perfiles.map(perfil => (
          <Tarjeta
            key={perfil.id}
            nombre={perfil.nombre}
            profesion={perfil.profesion}
            avatar={perfil.avatar}
            mensaje={perfil.mensaje}
            habilidades={perfil.habilidades}
            disponible={perfil.disponible}
          />
        ))}
      </main>
    </div>
  );
}

export default App;