// src/components/AnimLine.jsx
import React from 'react';

const AnimLine = ({heroHeight}) => {
  const lines = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${heroHeight} z-0 pointer-events-none primary_bg`}>
      <div className="relative w-full h-full">
        {lines.map(({ id, left, delay }) => (
          <span
            key={id}
            className="drop-line animate-drop"
            style={{
              left: `${left}%`,
              top: `-60px`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimLine;
