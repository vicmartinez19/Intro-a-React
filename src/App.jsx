import React from 'react';
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div className="app-container">
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#38bdf8' }}>Módulo 4: Intro a React</h1>
        <p style={{ color: '#94a3b8' }}>Componente Funcional y Sintaxis JSX básica</p>
      </header>
      <main>
        <Tarjeta />
      </main>
    </div>
  );
}

export default App;