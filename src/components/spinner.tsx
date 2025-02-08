import React from 'react';

type SpinnerProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    xxl: 'w-20 h-20',
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
    return (
        <div className={`relative ${sizeClasses[size]}`}>
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute left-[50%] bottom-0 w-[6%] h-[28%] bg-gray-600 rounded-sm opacity-0 animate-spinner-fade"
                    style={{
                        transformOrigin: 'center -90%',
                        transform: `rotate(${i * 30}deg)`,
                        animationDelay: `${i * 0.083}s`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Spinner;
