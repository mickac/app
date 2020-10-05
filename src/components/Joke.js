import React from "react"

function Joke(props){
    if(!props.content.question){
        props.content.question = "Now you see me..."
        props.content.punchLine = "... Now you don't."
    }

    return(
        <div className="joke">
            <h2>Question:</h2>
            <p>{props.content.question}</p>
            <h2>Punchline:</h2>
            <p>{props.content.punchLine}</p>
        </div>
    )
}

export default Joke