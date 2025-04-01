import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import WelcomeWidget from "./WelcomenWidget";
import '../styles/Home.css';
import { initParticles } from '../utils/particlesAnimation';

export default function Home() {
    const { logout } = useContext(AuthContext);
    
    useEffect(() => {
        const particleInterval = initParticles('.home-container');
        
        // Crear círculos decorativos
        const homeContainer = document.querySelector('.home-container');
        
        if (homeContainer) {
            for (let i = 1; i <= 3; i++) {
                const circle = document.createElement('div');
                circle.className = `circle-decoration circle-${i}`;
                homeContainer.appendChild(circle);
            }
        }
        
        return () => {
            if (particleInterval) {
                clearInterval(particleInterval);
            }
        };
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-title">¡Estás en Home!</h1>
            <div className="home-content">
                <WelcomeWidget />
                <button onClick={logout} className="logout-button">Cerrar Sesión</button>
            </div>
        </div>
    );
}