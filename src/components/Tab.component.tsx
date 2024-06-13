import React, { useEffect, useRef, useState } from 'react';
import { ClockIcon } from '@heroicons/react/20/solid';
import ImagesPosters from '../service/Posters.json';
import ScrollArrows from '@/utils/ScrollArrows';

function TabContent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollPositions, setScrollPositions] = useState<number[]>([0, 0, 0, 0, 0]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  useEffect(() => {
    const handleScroll = (index: number) => {
      if (contentRefs.current[index]) {
        const { scrollLeft } = contentRefs.current[index]!;
        setScrollPositions(prevPositions => {
          const updatedPositions = [...prevPositions];
          updatedPositions[index] = scrollLeft;
          return updatedPositions;
        });
      }
    };

    const onScroll = () => {
      handleScroll(selectedIndex);
    };

    if (contentRefs.current[selectedIndex]) {
      contentRefs.current[selectedIndex]!.addEventListener('scroll', onScroll);
    }

    return () => {
      if (contentRefs.current[selectedIndex]) {
        contentRefs.current[selectedIndex]!.removeEventListener('scroll', onScroll);
      }
    };
  }, [selectedIndex]);

  const handleScrollLeft = () => {
    if (contentRefs.current[selectedIndex]) {
      contentRefs.current[selectedIndex]!.scrollLeft -= 200; 
      setScrollPositions(prevPositions => {
        const updatedPositions = [...prevPositions];
        updatedPositions[selectedIndex] = contentRefs.current[selectedIndex]!.scrollLeft;
        return updatedPositions;
      });
    }
  };

  const handleScrollRight = () => {
    if (contentRefs.current[selectedIndex]) {
      contentRefs.current[selectedIndex]!.scrollLeft += 200; 
      setScrollPositions(prevPositions => {
        const updatedPositions = [...prevPositions];
        updatedPositions[selectedIndex] = contentRefs.current[selectedIndex]!.scrollLeft;
        return updatedPositions;
      });
    }
  };

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    contentRefs.current[index] = el;
    if (el && scrollPositions[index] !== el.scrollLeft) {
      el.scrollLeft = scrollPositions[index];
    }
  };

  const renderContent = (index: number) => (
    <div ref={setRef(index)} className="content-image">
      {ImagesPosters.map((image, idx) => (
        <div key={idx} className="tab-image-list">
          <img src={image.src} alt={image.alt} />
          <h2>{image.title}</h2>
          <p>{image.description}</p>
          <p><ClockIcon className="w-3 h-3 mr-1" />{Math.floor(image.totalDuration / 60)} min</p>
        </div>
      ))}
    </div>
  );

  const renderScrollArrows = () => (
    <ScrollArrows className="
                    flex flex-2  
                    items-start 
                    relative 
                    top-[-40px] 
                    w-60
                    left-[1240px]" 
                  onLeftClick={handleScrollLeft} 
                  onRightClick={handleScrollRight} />
  );

  return (
    <div className="tab-relative">
      <div className="flex space-x-2 border-b border-gray-200">
        <button
          className={`px-4 py-2 ${selectedIndex === 0 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
          onClick={() => setSelectedIndex(0)}
        >
          Todos
        </button>
        <button
          className={`px-4 py-2 ${selectedIndex === 1 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
          onClick={() => setSelectedIndex(1)}
        >
          Saúde
        </button>
        <button
          className={`px-4 py-2 ${selectedIndex === 2 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
          onClick={() => setSelectedIndex(2)}
        >
          Business
        </button>
        <button
          className={`px-4 py-2 ${selectedIndex === 3 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
          onClick={() => setSelectedIndex(3)}
        >
          SciCast
        </button>
        <button
          className={`px-4 py-2 ${selectedIndex === 4 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
          onClick={() => setSelectedIndex(4)}
        >
          Educação
        </button>
      </div>
      {renderScrollArrows()}
      <div className="tab-images">
        {renderContent(selectedIndex)}
      </div>
    </div>
  );
}

export default TabContent;
