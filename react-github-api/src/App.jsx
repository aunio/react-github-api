import { useRef } from 'react'
import './App.css'

function App() {

  const nameRef = useRef()

  function getValue(e) {
    e.preventDefault()
    const name = nameRef.current.value;
    console.log(name)
  }

  return (
    <form action="">
      <input
        type="text"
        ref={nameRef}
      />
      <button
        type="submit"
        onClick={getValue}
      >
        Enviar
      </button>
    </form>
  )
}

export default App
