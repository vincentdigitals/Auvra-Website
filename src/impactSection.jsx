{/* =========================================
          PRE-SHAPED 3D GLOBE STYLES (WITH HOVER FLOAT)
      ========================================= */}
      <style>{`
        @keyframes floatEarth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .real-3d-globe {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-image: url('/earth-ball.png');
          
          /* 'contain' ensures your circular image fits perfectly without being cut off! */
          background-size: contain; 
          background-position: center;
          background-repeat: no-repeat;
          
          /* Adds a premium shadow underneath the floating globe */
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15));
          
          /* Gentle floating animation */
          animation: floatEarth 6s ease-in-out infinite;
        }
      `}</style>