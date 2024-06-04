'use client'
import { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const ScrollArrows = () => {
    useEffect(() => {
        const arrowRight = document.getElementById('arrow-right');
        const arrowLeft = document.getElementById('arrow-left');
        const contentImage = document.querySelector('.content-image');

        if (arrowRight && arrowLeft && contentImage) {
            arrowRight.addEventListener('click', function() {
                contentImage.scrollBy({ top: 0, left: 200, behavior: 'smooth' });
            });

            arrowLeft.addEventListener('click', function() {
                contentImage.scrollBy({ top: 0, left: -200, behavior: 'smooth' });
            });
        }
    }, []);

    return (
        <div className="scroll-arrows">
            <button id="arrow-left" className="arrow">
                <ChevronLeftIcon className="w-5 h-5" />
            </button>  
            
            <button id="arrow-right" className="arrow">
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default ScrollArrows;