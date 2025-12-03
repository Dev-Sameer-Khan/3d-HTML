import React from 'react'
import { useState } from 'react';

const Intro = () => {

    const [showIntro, setShowIntro] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255,255,255,0.20)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        animation: 'fadeIn 0.5s ease-in',
        willChange : "opacity",
        transition: 'opacity 2s',
        opacity: showIntro ? 1 : 0,
        pointerEvents: showIntro ? 'auto' : 'none',
        color: 'orange' // Make all text orange by default
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          padding: '48px 52px',
          background: 'rgba(255,255,255,0.60)',
          backdropFilter: 'blur(36px) saturate(180%)',
          WebkitBackdropFilter: 'blur(36px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px 0 rgba(60,60,60,0.07)',
          textAlign: 'center',
          color: 'orange', // Set text color to orange
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(90deg,#ff9800 15%,#ff6d00 55%,#ffcc80 78%)', // Orange gradient
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-1px'
          }}
        >
          Welcome to Kitchen Studio
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: '1.7',
            marginBottom: '34px',
            color: 'orange', // Make paragraph text orange
            fontWeight: 500,
            textShadow: '0 1px 2px rgba(255,255,255,0.10)'
          }}
        >
          Immerse yourself in an interactive 3D kitchen studio. <span style={{color: "orange", fontWeight: 600, letterSpacing:"-0.5px"}}>Explore</span> each room and appliance to see real-time details, prices, and more as you design your dream kitchen.
        </p>

        <button
          onClick={() => setShowIntro(false)}
          style={{
            padding: '15px 44px',
            fontSize: '1.09rem',
            fontWeight: '600',
            color: 'orange',
            background: 'rgba(255,255,255,0.5)',
            border: '1.5px solid #ff9800',
            borderRadius: '44px',
            cursor: 'pointer',
            boxShadow: '0 6px 32px 0 rgba(255,152,0,0.08)',
            transition: 'all 0.22s cubic-bezier(.61,.54,.51,1.44)',
            transform: 'scale(1)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            marginTop: '10px',
            letterSpacing: '0.04em',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.055)';
            e.target.style.background = 'rgba(255,224,178,0.78)';
            e.target.style.boxShadow =
              '0 10px 32px 0 rgba(255,152,0,0.21)';
            e.target.style.borderColor = '#ff6d00';
            e.target.style.color = '#ff6d00';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = 'rgba(255,255,255,0.5)';
            e.target.style.boxShadow =
              '0 6px 32px 0 rgba(255,152,0,0.08)';
            e.target.style.borderColor = '#ff9800';
            e.target.style.color = 'orange';
          }}
        >
          Start Exploring
        </button>
      </div>
    </div>
  )
}

export default Intro