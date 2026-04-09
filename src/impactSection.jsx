{/* =========================================
          PLANET SPIN 3D GLOBE STYLES
      ========================================= */}
      <style>{`
        @keyframes spinEarth {
          /* We horizontally offset the background map from far left to far right */
          from { background-position: -200% 0; }
          to { background-position: 0 0; }
        }
        .real-3d-globe {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          /* We continue using your pre-shaped earth ball texture */
          background-image: url('/earth-ball.png');
          
          /* CRITICAL FOR SPIN: We must use 'cover' or specific scaling, not 'contain',
             to allow the texture to repeat seamlessly. */
          background-size: cover; 
          background-position: center;
          background-repeat: repeat-x; /* Repeats horizontally for infinite spin */
          
          /* Adds a premium depth shadow to simulate light hitting a sphere */
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
          
          /* The Planet Spin Animation: smooth, continuous sideways movement */
          animation: spinEarth 20s linear infinite;
        }
      `}</style>