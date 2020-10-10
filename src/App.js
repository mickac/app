import React from "react"

import Checkbox from "./components/Checkbox"
import todosData from "./data/todosData"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render(){
        const todosContent = this.state.todos.map(todo =>
            <Checkbox 
                key = {todo.id}
                id = {todo.id}
                text = {todo.text}
                completed = {todo.completed}
            />
        )
        return(
            <div className="todo-list">
                {todosContent}
            </div>
        )
    }

}

export default App