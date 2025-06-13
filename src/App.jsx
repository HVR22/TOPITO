import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh', 
      color: '#fff', 
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>BIENVENIDO A TU AVENTURA EDUCATIVA</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '0.5rem' }}>
          Explora, aprende y supera desafíos en el mundo de los topos
        </p>
      </header>

      <section>
        <iframe
          title="Juego Unity"
          src="/unity/index.html"
          width="1000"
          height="650"
          style={{
            border: '5px solidrgb(255, 204, 0)',
            borderRadius: '13px',
            boxShadow: '0 0 25px rgba(255, 196, 0, 0.3)',
            maxWidth: '100%',
          }}
          allowFullScreen
        />
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        © 2025 | Juego desarrollado por Héctor Velarde
      </footer>

    </div>
  );
}

export default App;





