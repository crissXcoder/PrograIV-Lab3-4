
export const initParticles = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (!container) return null;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    // Crear partículas iniciales
    for (let i = 0; i < 15; i++) {
        createParticle(particlesContainer);
    }
    
    container.appendChild(particlesContainer);
    
    // Crear nuevas partículas periódicamente
    const particleInterval = setInterval(() => {
        if (document.querySelector('.particles')) {
            createParticle(document.querySelector('.particles'));
        } else {
            clearInterval(particleInterval);
        }
    }, 3000);
    
    return particleInterval;
};

export const createParticle = (container) => {
    const particle = document.createElement('span');
    particle.className = 'particle';
    
    // Posición aleatoria
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Tamaño aleatorio
    const size = Math.floor(Math.random() * 15) + 5;
    
    // Duración aleatoria
    const duration = Math.random() * 15 + 8;
    
    // Retraso aleatorio
    const delay = Math.random() * 2;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
    
    // Eliminar partícula después de completar la animación
    setTimeout(() => {
        if (particle.parentNode === container) {
            container.removeChild(particle);
        }
    }, (duration + delay) * 1000);
};