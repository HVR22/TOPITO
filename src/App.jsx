import React, { useState } from 'react';

export default function App() {
  const [fullscreen, setFullscreen] = useState(false);
  const iframeUrl = 'unity/index.html';

  const toggleFullscreen = () => {
    setFullscreen(prev => !prev);
  };

  // Styles
  const containerStyle = {
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
  };

  const wrapperStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    paddingBottom: '62.5%', // 16:10 aspect ratio for embed
    backgroundColor: '#000',
    border: '5px solid #4CAF50',
    borderRadius: '12px',
    boxShadow: '0 0 25px rgba(0, 255, 0, 0.3)',
    overflow: 'hidden',
  };

  const iframeEmbeddedStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const iframeFullScreenStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    zIndex: 10000,
    backgroundColor: 'rgba(76,175,80,0.8)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* Normal Landing View */}
      {!fullscreen && (
        <>
          <header style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0 }}>BIENVENIDO A TU AVENTURA EDUCATIVA</h1>
            <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '0.5rem' }}>
              Explora, aprende y supera desafíos en el mundo de la salud
            </p>
          </header>

          <section style={{ marginBottom: '1rem' }}>
            <div style={wrapperStyle}>
              <iframe
                src={iframeUrl}
                title="Juego Unity"
                allowFullScreen
                style={iframeEmbeddedStyle}
              />
            </div>
          </section>

          <button
            onClick={toggleFullscreen}
            style={{
              fontSize: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
              marginBottom: '2rem',
            }}
          >
            PANTALLA COMPLETA
          </button>

          <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
            © 2025 | Juego desarrollado por Héctor Velarde
          </footer>
        </>
      )}

      {/* Fullscreen Overlay View */}
      {fullscreen && (
        <div style={overlayStyle}>
          <iframe
            src={iframeUrl}
            title="Juego Unity Fullscreen"
            allowFullScreen
            style={iframeFullScreenStyle}
          />
          <button onClick={toggleFullscreen} style={closeButtonStyle}>
            SALIR
          </button>
        </div>
      )}
    </div>
  );
}
