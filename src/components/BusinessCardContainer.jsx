import React, { useState, useRef, useCallback } from 'react';
import { BusinessCardFront } from './BusinessCardFront.jsx';
import { BusinessCardBack } from './BusinessCardBack.jsx';

export const BusinessCardContainer = ({ onNotify }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  
  // 3D Tilt calculation
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({
    rx: 0,
    ry: 0,
    sheenX: 50,
    sheenY: 50,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = useCallback((text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      onNotify(`${fieldName} کپی شد: ${text}`);
      setTimeout(() => setCopiedField(null), 2500);
    }).catch(() => {
      onNotify('خطا در کپی');
    });
  }, [onNotify]);

  const handleFlipToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleCardClick = (e) => {
    // Prevent flip if clicked on interactive elements like buttons, links, inputs, or copying
    const target = e.target;
    if (
      target.closest('button') ||
      target.closest('a') ||
      target.closest('input') ||
      target.closest('.no-flip')
    ) {
      return;
    }

    // Otherwise flip the card
    setIsFlipped((prev) => !prev);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt max 7 degrees for gentle luxury feel
    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;

    setTilt({
      rx: rotateX,
      ry: rotateY,
      sheenX,
      sheenY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0, sheenX: 50, sheenY: 50 });
  };

  return (
    <div className="relative w-full max-w-xl mx-auto perspective-1500 py-4 select-none">
      {/* 3D Tilt Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className="relative w-full transition-transform duration-200 ease-out cursor-pointer"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.015, 1.015, 1.015)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Specular Sheen Highlight following cursor */}
        <div
          className="absolute inset-0 rounded-[32px] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 380px at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.1) 40%, transparent 75%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* 3D Flipping Core container */}
        <div
          className="relative w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front Face */}
          <div
            className="w-full backface-hidden"
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
          >
            <BusinessCardFront
              onFlip={handleFlipToggle}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
          </div>

          {/* Back Face */}
          <div
            className="w-full absolute inset-0 backface-hidden rotate-y-180"
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <BusinessCardBack
              onFlip={handleFlipToggle}
              copiedField={copiedField}
              onCopy={handleCopy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
