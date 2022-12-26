import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])

  const handleClick = (event) => {
    const newDot = {
      x: event.clientX,
      y: event.clientY,
    }

    setList((prev) => [...prev, newDot])

  }

  return (
    <div
      id="page"
      onClick={handleClick}
    >
      {list.map(item =>
        <span
          className='dot'
          style={{ top: item.y, left: item.x }}
        />
      )}
    </div>
  );
}

export default App;
