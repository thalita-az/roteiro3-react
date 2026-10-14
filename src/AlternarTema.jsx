import { useState } from 'react';
function AlternarTema() {
  const [temaClaro, setTemaClaro] = useState(true);
  const estiloTema = {
    padding: '20px',
    backgroundColor: temaClaro ? '#ffffff' : '#121212',
    color: temaClaro ? '#000000' : '#ffffff',
  };
  return (
    <div style={estiloTema}>
      {' '}
      <h2>{temaClaro ? 'Tema Claro' : 'Tema Escuro'}</h2>{' '}
      <button onClick={() => setTemaClaro(!temaClaro)}> Alternar Tema </button>{' '}
    </div>
  );
}
export default AlternarTema;
