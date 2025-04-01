import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useUserState } from '../hooks/useUserState';
import '../styles/Login.css';

export default function Login() {
    
    const { setUser } = useContext(AuthContext)
    const { emailRef, passwordRef, error, login, setError } = useUserState()

    const handleLogin = () => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const isAuthenticated = login(email, password);

        if (!isAuthenticated) {
            setError("Usuario o contraseña incorrectos");
        }
            else {
            setUser({email: email})
        }
    }

    // Crear partículas para el fondo
    useEffect(() => {
        const container = document.querySelector('.container');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        
        // Crear 15 partículas
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
        
        return () => {
            clearInterval(particleInterval);
        };
    }, []);
    
    const createParticle = (container) => {
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

    return (
        <div className='container'> 
            <h1 className="login-title">¡Bienvenido! ✨</h1>
            
            <div className="form-group">
                <input 
                    type="email"
                    className='form-control'
                    placeholder='Correo' 
                    ref={emailRef}
                />
                <span className="input-icon">📧</span>
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className='form-control'
                    placeholder='Contraseña'
                    ref={passwordRef}
                />
                <span className="input-icon">🔒</span>
            </div>

            <button onClick={handleLogin} className='button-summit'>Ingresar</button>
            {error && <p className="error-message">❌ {error}</p>}
        </div>
    );
}