import React, { useState } from "react";

import './ScrollButton.css';
/* 
window.onscroll = function() {resizeHeader()};
function resizeHeader() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 300) {
        document.querySelector("#navbar").style.backgroundColor = "#44883c";
    } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {        
        document.querySelector(".welcome-section").style.animationName = "fadeIn";
        document.querySelector(".welcome-section").style.animationDuration = "1s";
        document.querySelector(".welcome-section").style.animationFillMode = "both, forwards, none";
        document.querySelector("#back-to-top").className = "";
    } else {
        document.querySelector(".nav").style.backgroundColor = "transparent";
        document.querySelector(".welcome-section").style.animationName = "bottom-t-top";
        document.querySelector("#back-to-top").className = "hidden";
    }
} */

const ScrollButton = () => {
    const [scrollButtonVisible, setScrollButtonVisible] = useState(false)
    const scrollFunction = () => {
        if (document.body.scrollTop > 63 || document.documentElement.scrollTop > 63) {
            setScrollButtonVisible(true)
        } else {
            setScrollButtonVisible(false)
        }
    }
    window.onscroll = function () {
        scrollFunction()
    }
    window.onload = function () {
        scrollFunction()
    }
    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    } 
    return (
        <div id="back-to-top" className={(scrollButtonVisible ? '' : 'hidden')}>
            <svg onClick={topFunction} viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
            </svg>
        </div>
    );
}
    
export default ScrollButton;
