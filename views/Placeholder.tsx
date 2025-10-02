
import React from 'react';

interface PlaceholderProps {
    title: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-center">
            <h1 className="text-4xl font-bold text-slate-500">{title}</h1>
            <p className="text-slate-600 mt-2">Coming Soon</p>
        </div>
    );
};

export default Placeholder;
