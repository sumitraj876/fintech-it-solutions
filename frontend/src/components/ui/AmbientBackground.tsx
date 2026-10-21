import { motion, useReducedMotion } from 'framer-motion';

export function AmbientBackground() {
  const reduce = useReducedMotion();
  const shouldReduce = reduce === true;

  // Animation variants for the drifting orbs
  const drift1 = shouldReduce ? {} : {
    x: [0, 40, -20, 0],
    y: [0, -30, 40, 0],
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
  };

  const drift2 = shouldReduce ? {} : {
    x: [0, -30, 50, 0],
    y: [0, 50, -30, 0],
    transition: { duration: 25, repeat: Infinity, ease: "easeInOut" }
  };

  const drift3 = shouldReduce ? {} : {
    x: [0, 20, -40, 0],
    y: [0, -40, 20, 0],
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-jet">
      
      {/* 1. The Global Video (very subtle) */}
      {!shouldReduce && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          src="/videos/hero-loop.mp4"
        />
      )}

      {/* 2. Deep Dark Overlay (so text is always readable) */}
      <div className="absolute inset-0 bg-jet/60" />

      {/* 3. Moving Ambient Orbs */}
      <motion.div
        animate={drift1}
        className="absolute top-[10%] left-[10%] h-[40vw] w-[40vw] rounded-full bg-pink/10 blur-[120px]"
      />
      <motion.div
        animate={drift2}
        className="absolute top-[50%] right-[5%] h-[35vw] w-[35vw] rounded-full bg-yellow/10 blur-[120px]"
      />
      <motion.div
        animate={drift3}
        className="absolute bottom-[0%] left-[30%] h-[45vw] w-[45vw] rounded-full bg-pink/5 blur-[150px]"
      />

      {/* 4. Faint Moving Grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid-faint opacity-20" />
      
    </div>
  );
}