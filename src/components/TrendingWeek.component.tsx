import { ClockIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface TrendingWeekProps {
    imageUrl: string;
    title: string;
    description: string;
    totalDuration: number;
}

const TrendingWeek: React.FC<TrendingWeekProps> = ({ imageUrl, title, description, totalDuration }) => {
    return (
        <div className="image-trend">
            <img src={imageUrl} alt="Trending Week" />
            <h2>{title}</h2>
            <p>{description}</p>
            <span><ClockIcon className="w-3 h-3 mr-1" />{totalDuration} min</span>
        </div>
    );
};

export default TrendingWeek;