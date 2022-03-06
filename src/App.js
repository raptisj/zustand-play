import './App.css'
import { useEffect } from 'react'
import { useStore, useSettings } from './store';
import AsyncTodos from './components/AsyncTodos';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  const removeAllTodos = useStore(state => state.removeAllTodos)
  const dark = useSettings(state => state.dark)
  const toggleDarkMode = useSettings(state => state.toggleDarkMode)

  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="App">
      <h1>Hello Zustand</h1>

      <button onClick={toggleDarkMode}>Toggle theme</button>
      <button onClick={removeAllTodos}>Clear all</button>

      <Form />
      <Todos />
      <hr />
      <AsyncTodos />
    </div>
  )
}

export default App
