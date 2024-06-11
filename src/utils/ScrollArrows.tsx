import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface ScrollArrowsProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const ScrollArrows: React.FC<ScrollArrowsProps> = ({ onLeftClick, onRightClick }) => {
  return (
    <div className="scroll-arrows">
      <button className="arrow" onClick={onLeftClick}>
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button className="arrow" onClick={onRightClick}>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollArrows;
