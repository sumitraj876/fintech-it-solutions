import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Container } from '../../components/ui/Container';
import { GradientText } from '../../components/ui/GradientText';
import { hero } from '../../config/site';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduce = reduce === true;

  useEffect(() => {
    if (videoRef.current && !shouldReduce) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented', e));
    }
  }, [shouldReduce]);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } } };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {!shouldReduce && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            src="/videos/hero-loop.mp4"
          />
        )}
        {/* Just a slight dark gradient on the left so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      {/* TEXT CONTENT */}
      <Container className="pt-32 pb-24 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p variants={item} className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-yellow mb-6">{hero.eyebrow}</motion.p>
          <motion.h1 variants={item} className="font-display font-bold text-white leading-[1.02] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">{hero.headlineTop}</span>
            <span className="block"><GradientText>{hero.headlineBottom}</GradientText></span>
          </motion.h1>
          <motion.p variants={item} className="mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">{hero.supporting}</motion.p>
          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button to={hero.primaryCta.to} variant="primary" size="lg">{hero.primaryCta.label}<ArrowRight size={18} /></Button>
            <Button to={hero.secondaryCta.to} variant="secondary" size="lg">{hero.secondaryCta.label}</Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/40 z-10">
        <span>{hero.scrollHint}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}