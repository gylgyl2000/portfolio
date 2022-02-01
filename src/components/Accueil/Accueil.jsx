import React from 'react';

import Particles from "react-tsparticles";
import 'animate.css'
import '../../js/resizeHeader';

import styles from './Accueil.module.css';

import Navbar from '../Navbar/Navbar';
import Welcome from './Welcome';

function Accueil() {
    const particlesInit = (main) => {
        console.log(main);
        // Tu peux initialiser l'instance tsParticles (principale) ici,
        // en ajoutant des formes personnalisées ou des préréglages
    };
      const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="App">
            <div id={styles["navbar"]} className={styles.nav}>
                <Navbar />
            </div>
            <div className="wrapper">
                <Welcome />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fullScreen: {
                        zIndex: 1,
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
  }
  
  export default Accueil;