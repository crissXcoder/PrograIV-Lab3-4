import Login from './components/Login';
import './App.css'
import Home from './components/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="content-wrapper">
      {
        !user 
        ?
          <Login />
        :
        <Home/>
      }
    </div>
  )
}

export default App