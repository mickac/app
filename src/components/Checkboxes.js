import React from "react"

function Checkboxes(){
    return(
        <div>
            <input type="checkbox" id="todo1" name="todo1" />
            <label for="todo1">First to-do</label><br />
            <input type="checkbox" id="todo2" name="todo2" />
            <label for="todo2">Second to-do</label><br />
            <input type="checkbox" id="todo3" name="todo3" />
            <label for="todo3">Third to-do</label><br />
        </div>
    )
}

export default Checkboxes