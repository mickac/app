import React from "react"

function Checkbox(props){
    return(
        <div className="todo-item">
            <input type="checkbox" id={props.id} defaultChecked={props.completed} />
            <label>{props.text}</label><br />
        </div>
    )
}

export default Checkbox