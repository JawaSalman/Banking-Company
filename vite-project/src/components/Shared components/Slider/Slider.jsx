
import { useEffect, useRef, useState } from 'react';
import './Slider.css';


const Slider = ({ children, totalItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [cardGap, setCardGap] = useState(0);
    
    const cardRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && containerRef.current.children.length > 0) {
            
            const firstCard = containerRef.current.children[0];
            setCardWidth(firstCard.offsetWidth);
            
            const containerStyle = window.getComputedStyle(containerRef.current);
            const gapValue = parseInt(containerStyle.gap) || 0;
            setCardGap(gapValue);
        }
    }, [children]);

    const nextSlide = () => {
        if (currentIndex < totalItems - 3) {
                setCurrentIndex(prev => prev + 1);
            }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <>
        <div className="ma-container-slider container">
            <div className="ma-fcontrols">
                <button onClick={prevSlide} disabled={currentIndex === 0} className='ma-leftbtn'> 
                    <img src="/Images/Home Page/Left Arrow.png" alt="prevArrow" />
                </button>
            </div>
            <div className="ma-slider-wrapper-parent ">
                <div className="ma-slider-wrapper" style={{ overflow: 'hidden' }}>
                    <div 
                        className="slider-container"
                        ref={containerRef}
                        style={{
                            display: 'flex',
                            transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div className='ma-scontrols'>
                <button onClick={nextSlide} disabled={currentIndex >= totalItems - 3} className='ma-rightbtn'> 
                    <img src="/Images/Home Page/Right Arrow.png" alt="" />
                </button>
            </div>
        </div>
        </>
    );
};

export default Slider;

