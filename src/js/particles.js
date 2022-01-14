import Particles from 'particlesjs/src/particles.js'

window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#75A5B7',
        maxParticles: 300,
        connectParticles: true,
        minDistance: 120
    });
};

export default Particles;