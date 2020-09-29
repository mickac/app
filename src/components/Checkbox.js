import React from "react"

function Checkbox(){
    return(
        <div className="todo-item">
            <input type="checkbox" id="todo" name="todo" />
            <label for="todo">To-do</label><br />
        </div>
    )
}

export default Checkbox