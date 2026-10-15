import { useState } from 'react';

function Contador() {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    setValor(valor - 1);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <h2 style={{ color: 'inherit' }}>Contador: {valor}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar} style={{ marginLeft: '8px' }}>
        -
      </button>
    </div>
  );
}

export default Contador;