import '../components/ScrollButton/ScrollButton.css';

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
    }

export default resizeHeader;