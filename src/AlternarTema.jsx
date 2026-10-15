import { useEffect, useState } from 'react';

function AlternarTema() {
  const [temaClaro, setTemaClaro] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = temaClaro ? '#ffffff' : '#121212';
    document.body.style.color = temaClaro ? '#000000' : '#ffffff';
  }, [temaClaro]);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'inherit', margin: '0 0 12px' }}>
        {temaClaro ? 'Tema Claro' : 'Tema Escuro'}
      </h2>
      <button onClick={() => setTemaClaro(!temaClaro)}>
        Alternar Tema
      </button>
    </div>
  );
}

export default AlternarTema;