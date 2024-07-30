import { useState } from 'react';
import './Conversor.css';

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('');
  const [vozATexto, setVozATexto] = useState('');

  const cambiarTexto = (evento) => setTextoAVoz(evento.target.value);

  const convertirTextoAVoz = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textoAVoz);
    synth.speak(utterThis);
  };

  const resultado = (event) => {
    setVozATexto(event.results[0][0].transcript);
  };

  const grabarVozATexto = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-Es';
    recognition.start();
    recognition.onresult = resultado;
  };


  const detenerGrabarVozATexto = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.stop();
  };


  const limpiarTexto = () => {
    setTextoAVoz('');
    setVozATexto('');
  };


  return (
    <div className='divkei'>
      <h3>Conversor de texto a voz</h3>
      <input
        type="text"
        id="textoAVoz"
        value={textoAVoz}
        onChange={cambiarTexto}
        placeholder="Introduce texto"
      />
      <button onClick={convertirTextoAVoz}>Convertir</button>

      <h3>Conversor de voz a texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button> 

      <h3>Detener grabacion</h3>
      <button onClick={detenerGrabarVozATexto}>Detener</button>

      <p>{vozATexto}</p>


      <h3>Limpiar Texto</h3>
      <button onClick={limpiarTexto}>Limpiar</button>

      
    </div>
  );
}

export default Conversor;
