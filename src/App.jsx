import Contador from './Contador';
import AlternarTema from './AlternarTema';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'inherit' }}>Estado com useState</h1>
      <Contador />
      <AlternarTema />
    </div>
  );
}

export default App;