import { useState } from 'react'
import './App.css';

export const ImageSlider = ({slides}) => {
    const [currentIndex, setIndex] = useState(0);
    const slidestyles = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${slides[currentIndex].url})`,    
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };  
    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };
    const leftarrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "20px",
        fontSize: "30px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }
    const rightarrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "20px",
        fontSize: "30px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }

    const tonext=()=>{
        const isLastslide=currentIndex===slides.length-1;
        const newIndex=isLastslide?0:currentIndex+1;
        setIndex(newIndex);
    }
    const toprev=()=>{
        const isfirstslide=currentIndex===0;
        const newIndex=isfirstslide?slides.length-1:currentIndex-1;
        setIndex(newIndex);
    }


    return (
        <div style={sliderStyles}>
            <div onClick={toprev} style={leftarrow}>❰</div>
            <div onClick={tonext} style={rightarrow}>❱</div>
            <div style={slidestyles}></div>
        </div>
    )
}
