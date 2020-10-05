import React from "react"

import Checkbox from "./components/Checkbox"
import todosData from "./data/todosData"

function App(){
    const todosContent = todosData.map(todo =>
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

export default App