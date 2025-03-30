import { useState, useRef } from 'react'

import './App.css'
import Home from './components/Home';


function App() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulación de autenticación
    if (email === "admi@una.cr" && password === "123456") {
      return true;
    }
    return false;
  }

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
  
  return (
    <>
      <h2 className='login'>Login</h2>

      
      {
        !user ?

        (<div className='container'> 
          <input 
          type="email"
          className='form-control'
          placeholder='Correo' 
          ref={emailRef}
          
          />

          <input
          type="password"
          className='form-control'
          placeholder='Contraseña'
          ref={passwordRef}
          />

          <button onClick={handleLogin} className='button-summit'>Ingresar</button>
          {error && <p>{error}</p>}
        </div>) :

        (
          <Home email={user.email} />
        )
      }
    </>
  )
}

export default App
