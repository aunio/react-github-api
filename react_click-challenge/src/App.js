import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])

  const handleClick = () => {
    console.log('clicou')
  }

  return (
    <div
      id="page"
      onClick={handleClick}
    >
      <span className='dot' />
    </div>
  );
}

export default App;
