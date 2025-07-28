// components/CustomCursor.tsx
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const tailLength = 5;
const colors = ['#a0e9ff', '#7fd8ff', '#5ec7ff', '#3eb5ff', '#1da4ff'];

const Cursor = () => {
  // Mouse position
  const mouse = useRef({ x: 0, y: 0 });

  // Array of motion values for the tail
  const positions = Array.from({ length: tailLength }, () => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
  }));

  // Spring-wrapped positions (smooth motion)
  const springs = positions.map((pos, i) => {
    const stiffness = 200 - i * 20;
    const damping = 30 + i * 5;
    return {
      x: useSpring(pos.x, { stiffness, damping }),
      y: useSpring(pos.y, { stiffness, damping }),
    };
  });

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Animation loop to move each point toward the previous
  useEffect(() => {
    const update = () => {
      positions[0].x.set(mouse.current.x);
      positions[0].y.set(mouse.current.y);
      for (let i = 1; i < tailLength; i++) {
        const prev = springs[i - 1];
        positions[i].x.set(prev.x.get());
        positions[i].y.set(prev.y.get());
      }
      requestAnimationFrame(update);
    };
    update();
  }, []);

  const sizes = [8, 12, 18, 26, 34]; // Circle sizes

  return (
    <>
      {springs.map((spring, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-50 top-0 left-0 mix-blend-difference"
          style={{
            translateX: spring.x,
            translateY: spring.y,
            width: `${sizes[i]}px`,
            height: `${sizes[i]}px`,
            border: `1px solid ${colors[i]}`,
            borderRadius: '50%',
            marginTop: `-${sizes[i] / 2}px`,
            marginLeft: `-${sizes[i] / 2}px`,
          }}
        />
      ))}
    </>
  );
};

export default Cursor;
