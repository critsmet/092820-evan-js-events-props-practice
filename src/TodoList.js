import React from 'react'

function TodoList(propsObj){
  return(
    <div id="todos-container">
      <h2>Todos Go Here</h2>
      <ul id="todo-list">
        {propsObj.todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    </div>
  )
}

export default TodoList
