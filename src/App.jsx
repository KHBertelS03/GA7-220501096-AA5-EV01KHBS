import { useState } from 'react';
import keirylogo from './assets/LOGO.png';
import './App.css';
import Conversor from './assets/Conversor';

function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado, setLogueado] = useState(false);

  const cambiarUsuario = (evento) => setUsuario(evento.target.value);
  const cambiarClave = (evento) => setClave(evento.target.value);

  const ingresar = () => {
    if (usuario === 'admin' && clave === 'admin') {
      alert("Iniciando Sesión");
      setLogueado(true);
    } else {
      alert('Usuario o clave incorrectos');
    }
  };

  return (
    <div>
      <img src={keirylogo} alt="keinerlogo" height={160}  width={515}/>
      {logueado ? (
        <Conversor />
      ) : (
        <div className='divkei'> 
          <input 
  
            type="text"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={cambiarUsuario}
            placeholder="Usuario"
          />
          <input 
            type="password"
            name="clave"
            id="clave"
            value={clave}
            onChange={cambiarClave}
            placeholder="Clave"
          />
          <button className='divkei' onClick={ingresar}>Ingresar</button>
        </div>
      )}
    </div>
  );
}

export default App;
