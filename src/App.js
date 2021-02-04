import React from 'react';
import './App.css';

import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  state = { todos: [] }

  handleSubmit = (e) => {
    e.preventDefault()
    let value = e.target.todo.value
    // document.getElementById('todo-list').innerHTML += `<li>${value}</li>`
    // this.state.todos.push(value) - DON'T CHANGE STATE LIKE THIS. USE SET STATE
    // console.log(this.state.todos);
    // this.setState({
    //   todos: [...this.state.todos, value]
    // })

    this.setState(function(pS){
      return { todos: [...pS.todos, value]}
    }, () => console.log("CALLBACK TO SETSTATE", this.state))

    console.log("IMMEDIATELY BELOW SETSTATE", this.state);
    e.target.reset()

  }

  render(){
    return(
      <div className="App">

        <TodoForm callback={this.handleSubmit}/>
        <TodoList todos={this.state.todos}/>

      </div>
    )
  }
}


export default App;
