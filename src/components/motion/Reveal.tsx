'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
}: RevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });

  const getVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'down':
        return { hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'left':
        return { hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'right':
        return { hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      default:
        return { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
