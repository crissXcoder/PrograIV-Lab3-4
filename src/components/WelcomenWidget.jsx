import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/WelcomeWidget.css';

export default function WelcomeWidget() {
    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        // Crear estrellas decorativas
        const welcomeWidget = document.querySelector('.welcome-widget');
        
        if (welcomeWidget) {
            // Crear 15 estrellas aleatorias
            for (let i = 0; i < 15; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 4}s`;
                welcomeWidget.appendChild(star);
            }
        }
    }, []);
    
    return (
        <div className="welcome-widget">
            <h2 className="welcome-title">Bienvenido a nuestro sitio web <span className="user-email">{user.email}</span></h2>
            <p className="welcome-message">Esperamos que disfrutes de tu visita.</p>
        </div>
    );
}