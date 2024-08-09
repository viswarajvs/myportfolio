import React, { useState, useRef, useEffect } from 'react';
import './FlipCard.scss';

function FlipCard({
    child,
    children,
    className
}) {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef(null)
  const backRef = useRef(null)
  const cardRef = useRef(null)

  const handleFlip = () => {
    setFlipped(!flipped)
    cardRef.current.scrollTop = 0
  };

  useEffect(() => {
    const frontHeight = frontRef.current.getBoundingClientRect().height + 50
    const backHeight = backRef.current.getBoundingClientRect().height + 50
    const newHeight = flipped ? backHeight : frontHeight;

    cardRef.current.style.height = `${newHeight}px`
    cardRef.current.scrollTop = 0
  }, [flipped, child, children]);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      ref={cardRef}
      onClick={handleFlip}
    >
      <div className={`flip-card-inner`}>
        <div className={`flip-card-front ${className}`} ref={frontRef}>
          {children}
          {child?.[0]}
        </div>
        <div className={`flip-card-back ${className}`} ref={backRef}>
          {children}
          {child?.[1]}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
