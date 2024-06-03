import React from 'react';

interface TrendingWeekProps {
    imageUrl: string;
}

const TrendingWeek: React.FC<TrendingWeekProps> = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt="Trending Week" />
        </div>
    );
};

export default TrendingWeek;