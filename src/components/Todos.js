import { useCallback } from 'react'
import { useStore } from '../store';

const Todos = () => {
  const todos = useStore(useCallback(state => state.todos, []))
  const removeTodo = useStore(state => state.removeTodo)

  return (
    <>
      <h2>Todos</h2>
      <p>{todos.length} todos in the list</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button onClick={() => removeTodo(todo.id)}>X</button>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos