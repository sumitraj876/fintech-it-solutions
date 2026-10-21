import { useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

type InteractiveCardProps = {
  children: ReactNode;
  to?: string;
  className?: string;
  accent?: 'pink' | 'yellow';
};

export function InteractiveCard({ children, to, className = '', accent = 'pink' }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const reduce = useReducedMotion();
  // Disable tilt on reduced motion or touch devices
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const shouldDisableTilt = reduce || isTouch;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldDisableTilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the center of the card
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Tilt calculation (max 10 degrees)
    const rY = ((mouseXPos - width / 2) / (width / 2)) * 10;
    const rX = ((height / 2 - mouseYPos) / (height / 2)) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setMouseX(mouseXPos);
    setMouseY(mouseYPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const glowColor = accent === 'pink' ? 'rgba(255, 22, 138, 0.15)' : 'rgba(255, 230, 0, 0.15)';

  const CardContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: shouldDisableTilt ? 0 : rotateX,
        rotateY: shouldDisableTilt ? 0 : rotateY,
        scale: isHovered && !shouldDisableTilt ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={[
        'group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm',
        'transition-colors duration-300',
        accent === 'pink' ? 'hover:border-pink/50' : 'hover:border-yellow/50',
        className,
      ].join(' ')}
    >
      {/* Spotlight Effect */}
      {!shouldDisableTilt && (
        <div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 40%)`,
          }}
        />
      )}

      {/* Content Wrapper (to sit above the spotlight) */}
      <div className="relative z-10 flex h-full flex-col" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-jet rounded-2xl">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}