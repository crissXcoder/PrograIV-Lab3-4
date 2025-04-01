import { useState, useRef } from 'react';
import { useContext } from 'react';

export function useUserState() {
    const emailRef = useRef()
    const passwordRef = useRef() 
    const [error, setError] = useState(false);

    const login = (email, password) => {
        // Simulación de autenticación
        if (email === "admi@una.cr" && password === "123456") {
        return true;
        }
        return false;
    }
    
    return { error, emailRef, passwordRef, login, setError }
}