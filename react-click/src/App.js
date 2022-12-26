import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [undidList, setUndidList] = useState([])

  const handleClick = (event) => {
    const NEW_DOT = {
      x: event.clientX,
      y: event.clientY,
    }

    setList((prev) => [...prev, NEW_DOT])
    setUndidList([])
  }

  const handleUndo = (event) => {
    event.stopPropagation()

    if (list.length === 0) {
      return
    }

    const LAST_ITEM = list[list.length - 1]

    setList((prev) => [...prev].slice(0, -1))
    setUndidList((prev) => [...prev, LAST_ITEM])
  }

  const handleRedo = (event) => {
    event.stopPropagation()

    if (undidList.length === 0) {
      return
    }

    const LAST_ITEM = undidList[undidList.length - 1]

    setUndidList((prev) => [...prev].slice(0, -1))
    setList((prev) => [...prev, LAST_ITEM])
  }

  return (
    <div id="page" onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {list.map((item, index) =>
        <span
          key={index}
          className='dot'
          style={{ top: item.y, left: item.x }}
        />
      )}
    </div>
  );
}

export default App;
