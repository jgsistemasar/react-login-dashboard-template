import './App.css';
import { Rutas } from './router/Rutas';

function App() {
  return (
    <div className="container">
      <div className='row mb-5'>
          <div className='col mb-5'>
              <h1></h1>
          </div>
      </div>
      <div className='row'>
        <div className='col'>
            <Rutas/>
        </div>

      </div>
    </div>
  );
}

export default App;
