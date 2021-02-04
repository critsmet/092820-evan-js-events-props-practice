import React from 'react'

function TodoForm(propsObj){
  return (
    <div id="todo-form-container">
        <form onSubmit={propsObj.callback} id="todo-form">
          <input name="todo" type="text" />
          <input type="submit" value="Add Todo!" />
        </form>
    </div>
  )
}

export default TodoForm
