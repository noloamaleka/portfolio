import React, { useEffect, useState } from 'react';
export function ScrollEvent({ children }) {
    const [isInView, setIsInView] = useState(false);
    const element = React.useRef(null);

    const handleScroll = () => {
        if (element.current) {
            const rect =element.current.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
            setIsInView(isInView);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={element} className={isInView ? 'in-view' : ''}>
            {children}
        </div>
    );
}
export default ScrollEvent;
