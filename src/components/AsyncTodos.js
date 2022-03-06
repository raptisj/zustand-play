import { useEffect, useCallback } from 'react'
import { useStore } from '../store';

const AsyncTodos = () => {
  const asyncTodos = useStore(useCallback(state => state.asyncTodos, []))
  const loading = useStore(state => state.loading)
  const fetchTodos = useStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <>
      <h2>Async Todos</h2>

      {loading && 'loading todos . . .'}

      <ul>
        {asyncTodos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AsyncTodos