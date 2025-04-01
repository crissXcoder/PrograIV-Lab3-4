import React, { createContext, useState } from 'react';
import { useUserState } from '../hooks/useUserState';

// 1. Crear un nuevo contexto
export const AuthContext = createContext();

// 2. Crear un nuevo provider para compartir el estado
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { login } = useUserState();

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3. Crear un nuevo consumer para consumir el contexto
